import React from 'react'
import { TasksList } from '../components/TasksList'
import { useEffect } from 'react'

export function TasksPage() {

    useEffect(() => {
        console.log('TasksPage mounted')
    }, [])

  return (
    <TasksList />
  )
}
