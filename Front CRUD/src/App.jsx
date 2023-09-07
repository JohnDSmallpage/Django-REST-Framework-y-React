import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import { TaskFormPage } from './pages/TaskFormPage'
import { TasksPage } from './pages/TasksPage'
import { Navigation } from './components/Navigation'
import { Toaster } from "react-hot-toast"

export function App() {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-br from-blue-500 to-green-500 p-8 min-h-screen'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks-create" element={<TaskFormPage/>} />
        <Route path="/tasks/:id" element={<TaskFormPage/>} />
      </Routes>
      <Toaster />
      </div>
    </BrowserRouter>
  )
}
