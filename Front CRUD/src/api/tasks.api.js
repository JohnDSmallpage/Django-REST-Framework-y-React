import axios from "axios"

const tasksApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/",

})

export const getAllTasks = async () => {
    return await tasksApi.get('/');
}

export const getTask = async (id) => {
    return await tasksApi.get(`/${id}`);
}

export const createTask = async (task) => {
    return await tasksApi.post('/', task);
}

export const deleteTask = async (id) => {
    return await tasksApi.delete(`/${id}`);
}

export const updateTask = async (id, task) => {
    return await tasksApi.put(`/${id}/`, task);
}