import React, {useContext, useEffect, useState} from 'react'

// utils from this component
import { RenderingBusinessContext,  dateToday, datediff, parseDate} from '../TaskListsComponent/TaskListUtils' 

// css
import './ContentComponent.css'

// context
import TaskContext from '../../Contexts/TaskContext'

// MockedData
import {userTasks} from '../../assets/MockedData/MockedData.jsx'


function ContentComponent() {

  
  const {userTaskId} = useContext(TaskContext)

  // I am looking for if task from YOUR TASKS has an active substask/message
  function findUserTask(taskId){
    try{
        const object = userTasks.find(obj => obj.id === taskId)
        try{
          const objectbusinessContext = object.businessContext.find(obj => obj.status === 2)
          return (objectbusinessContext)
        } catch(e) {
          return (console.log("not active task"))
      }   
    } catch(e) {
        return (console.log("wrong id"))
    } 
  }  

  const [localUserTask,setLocalUserTask] = useState({})

  // if we change task from YOUR TASKS, we update localUserTask
  useEffect(()=>{      
      setLocalUserTask(findUserTask(userTaskId))
  },[userTaskId])

  // function for showing title
  function ShowMessageTitle(){
    try{
      const myyMessage = localUserTask.title
      return (myyMessage)
    }catch(e) {
      const myyMessage = ''
      console.log("not active task")
      return (myyMessage)
  }
  }

  const messageTitle = ShowMessageTitle()
 
  // function for showing author
  function ShowMessageAuthor(){
    try{
      const myyMessage = localUserTask.author
      return (myyMessage)
    }catch(e) {
      const myyMessage = ''
      console.log("not active task")
      return (myyMessage)
  }
  }

  const messageAuthor = ShowMessageAuthor()

   // function for showing content
  function ShowMessageContent(){
    try{
      const myyMessage = localUserTask.content
      return (myyMessage)
    }catch(e) {
      const myyMessage = ''
      console.log("not active task")
      return (myyMessage)
  }
  }

  const messageContent = ShowMessageContent()

   // function for showing avatar
   function ShowMessageAvatar(){
    try{
      const myyMessage = localUserTask.avatar
      return (myyMessage)
    }catch(e) {
      const myyMessage = null
      console.log("not active task")
      return (myyMessage)
  }
  }

  const messageAvatar = ShowMessageAvatar()  

     // function for showing avatar
    function ShowMessageDate(){
      try{
        const myyMessage = localUserTask.created_at
        return (myyMessage)
      }catch(e) {
        const myyMessage = null
        console.log("not active task")
        return (myyMessage)
    }
    }
  
    const messageCreatedAt = ShowMessageDate()  

  



    return (
    <div className='ContentComponent'>
        <div className='ContentComponentInbox'>

          {/* rendering list of subtasks/messages in Business Context box */}

            <div className='ContentComponentRectangle'> 
                {RenderingBusinessContext(userTaskId)}
            </div>            
        </div>
          
          {/* rendering picked/active subtask */}

        <div className='ContentComponentMessageBox'>
          <div className='ContentComponentMessageBoxHeader'>
            {messageTitle}
          </div>
          <div className='ContentComponentMessageBoxMessage'>

              <div className='ContentComponentMessageBoxAvatarBox'>
              {messageAvatar &&<img src={messageAvatar} alt="message avatar" className='avatarContentComponent'/>}
              </div>

              <div className='ContentComponentMessageBoxMessageMetadata'>
                <div className='ContentComponentMessageAvatar' > {messageAuthor}</div>
                {messageCreatedAt && <div className='ContentComponentMessageDate'>• {datediff(parseDate(messageCreatedAt), parseDate(dateToday))} day(s) ago: {messageCreatedAt} • 11:20</div>}
              </div>
    
            <div className='ContentComponentMessageBoxMessageContent'>{messageContent}</div>
          </div>
        </div>
    </div>
  )
}

export default ContentComponent