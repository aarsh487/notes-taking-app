import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config.json' assert { type: "json"};
import jwt from 'jsonwebtoken'

mongoose.connect(process.env.MONGO_URL)

import { UserModel } from './models/user.model.js'
import { NoteModel } from './models/note.model.js';
import { authenticateToken } from './utilities.js';


const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);


app.post('/create-account', async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName) {
        return res.
            status(400).
            json({ error: true, message: "Full Name is required" })
    };

    if (!email) {
        return res.
            status(400).
            json({ error: true, message: "Email is required" })
    };

    if (!password) {
        return res.
            status(400).
            json({ error: true, message: "Password is required" })
    };

    const isUser = await UserModel.findOne({ email: email })
    if (isUser) {
        return res.
            status(400).
            json({ error: true, message: "User already exists" })
    }

    const user = new UserModel({
        fullName,
        email,
        password
    });

    await user.save()

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registration Successfull"
    });

});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.
            status(400).
            json({ error: true, message: "Email is required" })
    };

    if (!password) {
        return res.
            status(400).
            json({ error: true, message: "Password is required" })
    };

    const userInfo = await UserModel.findOne({ email: email })

    if(!userInfo){
        res.status(400).json({ error: true, message: "User not found" })
    }

    if(userInfo.email === email && userInfo.password === password){
        const user = { user : userInfo }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

        return res.json({
            error: false,
            accessToken,
            email,
            message: "Login successfull"
        })
    } else {
        res.status(400).json({ error: true, message: "Invalid credentials" })
    }




});

app.get('/get-user', authenticateToken, async(req, res) => {
    const { user } = req.user;

    try{
        const isUser = await UserModel.findOne({ _id: user._id });

        if(!isUser){
            return res.status(401).json({ error: true, message: "User not found"})
        };

        return res.json({ 
            user: {fullName: isUser.fullName,
                    email: isUser.email,
                    _id: isUser._id,
                    createdOn: isUser.createdOn }, 
            message: "User found successfully" })

    } catch(errro){
        return res.status(500).json({ error: true, message: "Internal server error" })
    }
});

// Add Note
app.post('/add-note', authenticateToken, async(req, res) => {
    const { title, content, tags } = req.body;
    const { user } = req.user;

    if(!title){
        return res.
            status(400).
            json({ error: true, message: "Title is required" })
    };

    if(!content){
        return res.
            status(400).
            json({ error: true, message: "Content is required" })
    };

    try{
        const note = new NoteModel({
            title: title,
            content: content,
            tags: tags || [],
            userId: user._id
        })

        await note.save();

        return res.json({ error: false,
            note,
            message: "Note added successfully"
        });
    } catch(error){
        return res.status(500).json({ error: true, message: "Internal server error" })
    };
});

app.put('/edit-note/:noteId', authenticateToken, async(req, res) => {
    const noteId = req.params.noteId;
    const { user } = req.user;
    const { title, content, tags, isPinned } = req.body;

    if(!title && !content && !tags){
        return res.status(400).josn({ error: true, message: "No changes provided" });
    }

    try{
        const note = await NoteModel.findOne({ _id: noteId, userId: user._id });

        if(!note){
            res.status(404).json({ error: true, message: "Note not found" })
        }

        if (title) note.title = title;
        if (content) note.content = content;
        if (tags) note.tags = tags;
        if (isPinned) note.isPinned = isPinned;

        await note.save();

        return res.json({ error: false, note, message: "Note updated successfully"})
    } catch(error){
        return res.status(500).json({ error: true, message: "Inernal server error"})
    }

});

app.get('/get-all-notes/', authenticateToken, async(req, res) => {
    const { user } = req.user;

    try{
        const notes = await NoteModel.find({userId: user._id }).sort({ isPinned: -1 });

        if(!notes){
            res.status(404).json({ error: true, message: "Note not found" })
        }

        return res.json({ error: false, notes, message: "All Notes retrieved successfully" })
    } catch(error){
        return res.status(500).json({ error: true, message: "Inernal server error"})
    }
});

app.delete('/delete-note/:noteId', authenticateToken, async(req, res) => {
    const noteId = req.params.noteId;
    const { user } = req.user;

    try{
        const note = await NoteModel.findOne({ _id: noteId, userId: user._id });

        if(!note){
            res.status(404).json({ error: true, message: "Note not found" })
        }

        await NoteModel.deleteOne({ _id: noteId, userId: user._id })

        return res.json({ error: false, message: "Note deleted successfully"})
    } catch(error){
        return res.status(500).json({ error: true, message: "Inernal server error"})
    };

});

app.put('/update-note-pinned/:noteId', authenticateToken, async(req, res) => {
    const noteId = req.params.noteId;
    const { user } = req.user;
    const { isPinned } = req.body;

    try{
        const note = await NoteModel.findOne({ _id: noteId, userId: user._id });

        if(!note){
            res.status(404).json({ error: true, message: "Note not found" })
        }

        note.isPinned = isPinned;

        await note.save();

        return res.json({ error: false, note, message: "Note updated successfully"})
    } catch(error){
        return res.status(500).json({ error: true, message: "Inernal server error"})
    }

});


app.get('/search-notes', authenticateToken, async(req, res) => {
    const { user } = req.user;
    const { query } = req.query;

    if(!query){
        return res.status(400).json({ error: true, message: "Search query is required" })
    }

    try{
        const matchingNotes = await NoteModel.find({
            userId: user._id,
            $or: [
                { title: { $regex: new RegExp(query, "i") } },
                { content:  { $regex: new RegExp(query, "i") } }
            ]
        })
        return res.json({
            error: false,
            notes: matchingNotes,
            message: "Notes matching the search query are retrieved successfully"
        })
    } catch(error){
        return res.status(500).json({ error: true, message: "Internal Sever Error" })
    }
});


app.listen(3000)