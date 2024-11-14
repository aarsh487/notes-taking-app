import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    createdOn: { type: Date, default: new Date().getTime() }
});

export const UserModel = mongoose.model("User", userSchema);

