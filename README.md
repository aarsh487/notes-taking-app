<h1>Notes-Taking App</h1>

<p>A full-stack notes-taking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to securely authenticate using JSON Web Token (JWT), manage their notes with full CRUD functionality, and organize them with tags and pinning features. Real-time toast notifications styled with Tailwind CSS enhance the user experience.</p>

<h3>Features</h3>
<ul>
  <li><strong>Secure User Authentication</strong>: JWT-based authentication to protect user data.</li>
  <li><strong>Full CRUD Functionality</strong>: Create, Read, Update, and Delete notes.</li>
  <li><strong>Pinning Feature</strong>: Pin important notes to easily access them.</li>
  <li><strong>Hashtag Organization</strong>: Organize notes with hashtags for quick searching and categorization.</li>
  <li><strong>Real-Time Toast Notifications</strong>: Display notifications for actions like saving, updating, and deleting notes.</li>
  <li><strong>Responsive UI</strong>: Built using React.js and styled with Tailwind CSS for a modern and mobile-friendly interface.</li>
</ul>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend</strong>: React.js, Tailwind CSS</li>
  <li><strong>Backend</strong>: Node.js, Express.js</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Authentication</strong>: JSON Web Token (JWT)</li>
</ul>

<h3>Installation</h3>
<ol>
  <li><strong>Clone the Repository</strong><br />
    <code>git clone https://github.com/your-username/notes-taking-app.git</code>
  </li>
  <li><strong>Install Dependencies</strong><br />
    Navigate to the project directory and install both backend and frontend dependencies:
    <ul>
      <li><strong>Backend</strong><br />
        <code>cd backend</code><br />
        <code>npm install</code>
      </li>
      <li><strong>Frontend</strong><br />
        <code>cd frontend</code><br />
        <code>npm install</code>
      </li>
    </ul>
  </li>
  <li><strong>Set up Environment Variables</strong><br />
    Create a <code>.env</code> file in the backend directory and add the following environment variables:
    <pre>
      MONGO_URL=your_mongo_connection_string
      JWT_SECRET=your_jwt_secret
    </pre>
  </li>
  <li><strong>Run the Application</strong><br />
    Start both the backend and frontend servers:
    <ul>
      <li><strong>Backend</strong><br />
        <code>cd backend</code><br />
        <code>npm start</code>
      </li>
      <li><strong>Frontend</strong><br />
        <code>cd frontend</code><br />
        <code>npm run dev</code>
      </li>
    </ul>
  </li>
</ol>

<h3>Usage</h3>
<ul>
  <li><strong>Login/Register</strong>: Sign up or log in with your credentials using JWT authentication.</li>
  <li><strong>Add, Edit, Delete Notes</strong>: Create new notes, edit existing ones, or delete them.</li>
  <li><strong>Pin Notes</strong>: Pin important notes for easy access.</li>
  <li><strong>Organize with Hashtags</strong>: Add hashtags to your notes to categorize them and search efficiently.</li>
  <li><strong>Real-Time Notifications</strong>: See toast notifications for actions like creating, updating, or deleting notes.</li>
</ul>

<p>Feel free to adjust the <code>MONGO_URI</code> and <code>JWT_SECRET</code> variables to match your local environment or production settings.</p>
