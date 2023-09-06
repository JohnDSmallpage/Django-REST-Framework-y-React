import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import { TaskFormPage } from './pages/TaskFormPage'
import { TasksPage } from './pages/TasksPage'
import { Navigation } from './components/Navigation'

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks-create" element={<TaskFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
