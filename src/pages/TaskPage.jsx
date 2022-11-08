import React from 'react'

// components
import BusinessContextTapBar from '../components/BusinessContextTapBar/BusinessContextTapBar'
import ContentComponent from '../components/ContentComponent/ContentComponent'
import TaskListComponent from '../components/TaskListsComponent/TaskListComponent'

function TaskPage() {
  return (
    <div>
        <TaskListComponent/>
        <BusinessContextTapBar/>
        {/* <ContentComponent/> */}
    </div>
  )
}

export default TaskPage