// src/App.js
import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editingTask, setEditingTask] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all'); // For filtering by status
    const [searchQuery, setSearchQuery] = useState(''); // For searching by title

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    const handleCreateTask = async () => {
        if (newTask.title.trim()) {
            await createTask(newTask);
            setNewTask({ title: '', description: '' });
            loadTasks();
        } else {
            alert("Title can't be empty");
        }
    };

    const handleUpdateTask = async (id, updatedTask) => {
        await updateTask(id, updatedTask);
        loadTasks();
        setEditingTask(null);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleEditTask = (task) => {
        setEditingTask({ ...task });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingTask((prev) => ({ ...prev, [name]: value }));
    };

    // Filter tasks based on status and search query
    const filteredTasks = tasks.filter(task => {
        const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="App">
            <div className="header">
                <h1>Task Manager</h1>
                <button onClick={loadTasks} className="refresh-button">Refresh Tasks</button>
            </div>
            <div className="task-creation">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <button onClick={handleCreateTask} className="add-task-button">Add Task</button>
            </div>
            <div className="task-filters">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task._id} className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
                        {editingTask && editingTask._id === task._id ? (
                            <div className="task-edit">
                                <input
                                    type="text"
                                    name="title"
                                    value={editingTask.title}
                                    onChange={handleEditChange}
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={editingTask.description}
                                    onChange={handleEditChange}
                                />
                                <select
                                    name="status"
                                    value={editingTask.status}
                                    onChange={handleEditChange}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <button onClick={() => handleUpdateTask(task._id, editingTask)} className="save-button">Save</button>
                                <button onClick={() => setEditingTask(null)} className="cancel-button">Cancel</button>
                            </div>
                        ) : (
                            <div className="task-content">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <span className={`status ${task.status}`}>{task.status}</span>
                            </div>
                        )}
                        <div className="task-actions">
                            {editingTask && editingTask._id === task._id ? null : (
                                <button onClick={() => handleEditTask(task)} className="edit-button">Edit</button>
                            )}
                            <button onClick={() => handleDeleteTask(task._id)} className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
