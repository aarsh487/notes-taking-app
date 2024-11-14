# notes-taking-app

A full-stack notes-taking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to securely authenticate using JSON Web Token (JWT), manage their notes with full CRUD functionality, and organize them with tags and pinning features. Real-time toast notifications styled with Tailwind CSS enhance the user experience.

Features <br />
Secure User Authentication: JWT-based authentication to protect user data.<br />
Full CRUD Functionality: Create, Read, Update, and Delete notes.<br />
Pinning Feature: Pin important notes to easily access them.<br />
Hashtag Organization: Organize notes with hashtags for quick searching and categorization.<br />
Real-Time Toast Notifications: Display notifications for actions like saving, updating, and deleting notes.<br />
Responsive UI: Built using React.js and styled with Tailwind CSS for a modern and mobile-friendly interface.<br />

# Tech Stack
Frontend: React.js, Tailwind CSS <br />
Backend: Node.js, Express.js<br />
Database: MongoDB<br />
Authentication: JSON Web Token (JWT)<br />

# Installation
Clone the Repository<br />

git clone https://github.com/your-username/notes-taking-app.git<br />
Install Dependencies<br />
Navigate to the project directory and install backend and frontend dependencies:<br />

Backend<br />

cd backend<br />
npm install<br />

cd frontend<br />
npm install<br />
Set up Environment Variables<br />
Create a .env file in the backend directory and add your environment variables:<br />


MONGO_URI=your_mongo_connection_string<br />
JWT_SECRET=your_jwt_secret<br />

Run the Application<br />
Start both the backend and frontend servers:<br />

cd backend<br />
npm start<br />
<br />

cd frontend<br />
npm start<br />


# Usage
Login/Register: Sign up or log in with your credentials using JWT authentication.<br />
Add, Edit, Delete Notes: Create new notes, edit existing ones, or delete them.<br />
Pin Notes: Pin important notes for easy access.<br />
Organize with Hashtags: Add hashtags to your notes to categorize them and search efficiently.<br />
Real-Time Notifications: See toast notifications for actions like creating, updating, or deleting notes.<br />
