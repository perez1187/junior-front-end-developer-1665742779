import React, {useContext} from 'react'
import { RenderingBusinessContext } from '../TaskListsComponent/TaskListUtils' 

import messageAvatar from '../../assets/icons/Ellipse 3.png'

// css
import './ContentComponent.css'

// context
import TaskContext from '../../Contexts/TaskContext'

function ContentComponent() {

  const messageText = `Hello!`
  const {userTaskId} = useContext(TaskContext)

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
            Application has been accepted  🎉  🙌
          </div>
          <div className='ContentComponentMessageBoxMessage'>

              <div className='ContentComponentMessageBoxAvatarBox'>
              <img src={messageAvatar} alt="message avatar" />
              </div>

              <div className='ContentComponentMessageBoxMessageMetadata'>
                <div className='ContentComponentMessageAvatar' > Kirsten Aniston</div>
                <div className='ContentComponentMessageDate'>• Today 17th December • 11:20</div>
              </div>
    
            <div className='ContentComponentMessageBoxMessageContent'>{messageText}</div>
          </div>
        </div>
    </div>
  )
}

export default ContentComponent