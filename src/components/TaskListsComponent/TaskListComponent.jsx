import React from 'react'

import './TaskListComponent.css'
import TaskListContent from './TaskListContent'
import TaskListHeader from './TaskListHeader'
import TaskListSeparator from './TaskListSeparator'

function TaskListComponent() {
  return (
    <div className='TaskListComponent'>
      <TaskListHeader/>
      <TaskListSeparator/>
      <TaskListContent/>
    </div>
  )
}

export default TaskListComponent