import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'
import { TaskCard } from './TaskCard';
import { Link } from 'react-router-dom';

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
    <button className='bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold mb-3'>
          <Link to="/tasks-create">Create Task</Link>
        </button>

    <div className='grid grid-cols-3 gap-2'>
    {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
    ))}
    </div>
    </>
  )
}
