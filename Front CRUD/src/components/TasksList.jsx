import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'

export function TasksList() {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const res = await getAllTasks();
        setTasks(res.data);
    }

    useEffect(() => {
        loadTasks()
    }, [])


  return (
    <>
    {tasks.map(task => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    ))}
    </>
  )
}
