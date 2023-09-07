import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <div >
        <Link className='flex flex-col items-center text-3xl font-bold text-white text-4xl' to="tasks"><h1>Task App</h1></Link>
      
        <button className='bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold mb-3'>
          <Link to="/tasks-create">Create Task</Link>
        </button>
        
    </div>
  )
}
