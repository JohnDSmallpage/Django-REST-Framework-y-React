import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import { TaskFormPage } from './pages/TaskFormPage'
import { TasksPage } from './pages/TasksPage'
import { Navigation } from './components/Navigation'
import { Toaster } from "react-hot-toast"
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

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
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      <Toaster />
      </div>
    </BrowserRouter>
  )
}
