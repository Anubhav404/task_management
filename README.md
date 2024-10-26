<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task Management Application</title>
</head>
<body>

<h1>📝 Task Management Application</h1>
<p>A simple and user-friendly <strong>Task Management Application</strong> built with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. This app allows users to manage their tasks by creating, viewing, editing, completing, and deleting tasks, with convenient options to filter by status and search by title. The application is deployed on <strong>Render</strong>.</p>

<hr>

<h2>📋 Table of Contents</h2>
<ul>
    <li><a href="#features">🎯 Features</a></li>
    <li><a href="#technologies-used">🛠 Technologies Used</a></li>
    <li><a href="#getting-started">🚀 Getting Started</a>
        <ul>
            <li><a href="#frontend-setup">Frontend Setup</a></li>
            <li><a href="#backend-setup">Backend Setup</a></li>
        </ul>
    </li>
    <li><a href="#environment-variables">🔧 Environment Variables</a></li>
    <li><a href="#api-endpoints">📚 API Endpoints</a></li>
    <li><a href="#deployment">🌐 Deployment</a></li>
    <li><a href="#acknowledgments">🙏 Acknowledgments</a></li>
</ul>

<hr>

<h2 id="features">🎯 Features</h2>
<ul>
    <li><strong>Task Management</strong>: Create, edit, delete, and mark tasks as completed or pending.</li>
    <li><strong>Search & Filter</strong>: Quickly find tasks by filtering based on status or searching by title.</li>
    <li><strong>Responsive Design</strong>: A clean and professional UI optimized for all devices.</li>
    <li><strong>Backend & Frontend Integration</strong>: RESTful API with React frontend and Express backend.</li>
</ul>

<hr>

<h2 id="technologies-used">🛠 Technologies Used</h2>
<ul>
    <li><strong>Frontend</strong>: React.js, Axios</li>
    <li><strong>Backend</strong>: Node.js, Express.js, MongoDB with Mongoose</li>
    <li><strong>Deployment</strong>: Render (for both frontend and backend)</li>
</ul>

<hr>

<h2 id="getting-started">🚀 Getting Started</h2>

<h3>Prerequisites</h3>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> and npm</li>
    <li><a href="https://www.mongodb.com/">MongoDB</a> (optional for local development if using a cloud-hosted MongoDB instance)</li>
</ul>

<h3 id="frontend-setup">Frontend Setup</h3>
<ol>
    <li><strong>Clone the repository</strong> and navigate to the <code>frontend</code> directory:
        <pre><code>git clone https://github.com/Anubhav404/task_management/
cd frontend</code></pre>
    </li>
    <li><strong>Install dependencies</strong>:
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start the frontend</strong>:
        <pre><code>npm start</code></pre>
        <p>Your React app should now be running on <code>http://localhost:3000</code>.</p>
    </li>
</ol>

<h3 id="backend-setup">Backend Setup</h3>
<ol>
    <li><strong>Navigate to the backend folder</strong> in the project directory:
        <pre><code>cd backend</code></pre>
    </li>
    <li><strong>Install dependencies</strong>:
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Set up environment variables</strong> (see <a href="#environment-variables">Environment Variables</a>).</li>
    <li><strong>Start the backend server</strong>:
        <pre><code>npm start</code></pre>
        <p>The server will run on <code>http://localhost:5000</code>.</p>
    </li>
</ol>

<hr>

<h2 id="environment-variables">🔧 Environment Variables</h2>
<p>To configure your backend, create a <code>.env</code> file in the <code>backend</code> folder and add the following:</p>
<pre><code>MONGO_URI=&lt;your_mongo_db_connection_string&gt;
PORT=5000</code></pre>
<p>Replace <code>&lt;your_mongo_db_connection_string&gt;</code> with your MongoDB URI.</p>

<hr>

<h2 id="api-endpoints">📚 API Endpoints</h2>
<p>The backend API provides the following endpoints:</p>
<ul>
    <li><strong>POST</strong> <code>/tasks</code>: Create a new task</li>
    <li><strong>GET</strong> <code>/tasks</code>: Retrieve all tasks</li>
    <li><strong>GET</strong> <code>/tasks/:id</code>: Retrieve a specific task by ID</li>
    <li><strong>PUT</strong> <code>/tasks/:id</code>: Update a task by ID</li>
    <li><strong>DELETE</strong> <code>/tasks/:id</code>: Delete a task by ID</li>
</ul>

<hr>

<h2 id="deployment">🌐 Deployment</h2>

<h3>Frontend Deployment on Render</h3>
<p>The frontend is deployed on Render and can be accessed at:
<a href="https://task-management-1-tr8z.onrender.com"><strong>Frontend URL</strong></a></p>

<h3>Backend Deployment on Render</h3>
<p>The backend is deployed on Render and can be accessed at:
<a href="https://task-management-6w2x.onrender.com"><strong>Backend URL</strong></a></p>

<h3>Configuring the Frontend for Deployment</h3>
<p>In the frontend React app, update the base API URL to the deployed backend URL in <code>frontend/src/services/taskService.js</code>:</p>
<pre><code>import axios from 'axios';

const api = axios.create({
  baseURL: "https://task-management-6w2x.onrender.com", // Render backend URL
});

export const getTasks = () =&gt; api.get('/tasks');
export const createTask = (task) =&gt; api.post('/tasks', task);
export const updateTask = (id, task) =&gt; api.put(`/tasks/${id}`, task);
export const deleteTask = (id) =&gt; api.delete(`/tasks/${id}`);</code></pre>

<hr>

<h2 id="acknowledgments">🙏 Acknowledgments</h2>
<p>Special thanks to:</p>
<ul>
    <li><strong>Render</strong> for an intuitive deployment platform.</li>
    <li>The creators of <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> for their amazing technologies.</li>
    <li>All contributors who have helped improve this project.</li>
</ul>

</body>
</html>
