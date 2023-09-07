import React from 'react'
import { useNavigate } from 'react-router-dom'

export function TaskCard({ task }) {

  const navigate = useNavigate();

  return (
    <>
        <div className="bg-blue-900 p-4 rounded-lg shadow-md hover:bg-green-700 hover:cursor-pointer text-white transition duration-300 ease-in-out transform hover:scale-105 mb-3 ml-2 mr-2" onClick={() => {navigate("/tasks/" + task.id)}}>
          <h1 className="text-2xl font-semibold uppercase">{task.title}</h1>
          <p className="text-gray-300 mt-2">{task.description}</p>
          <hr className="border-t mt-3 border-gray-500" />
        </div>

    </>
  )
}
