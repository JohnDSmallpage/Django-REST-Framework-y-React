import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'
import { TaskCard } from './TaskCard';

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
    
    <div className='grid grid-cols-3 gap-2'>
    {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
    ))}
    </div>
    </>
  )
}
