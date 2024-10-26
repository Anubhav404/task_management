// src/services/taskService.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api/tasks"; // here as i am hosting my backend so i am using http not https 

export const getTasks = () => axios.get(API_URL);//here i am returning promise
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

