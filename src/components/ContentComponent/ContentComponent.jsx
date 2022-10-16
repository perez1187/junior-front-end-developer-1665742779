import React from 'react'
import { RenderingBusinessContext } from '../TaskListsComponent/TaskListUtils' 

// css
import './ContentComponent.css'

function ContentComponent() {
  return (
    <div className='ContentComponent'>
        <div className='ContentComponentInbox'>
            <div className='ContentComponentRectangle'> 
                {RenderingBusinessContext(4)}
            </div>
            
            {/* <div className='ContentComponentGroup'>
                <p> Kirsten Aniston   •   Dec 17 </p>
                <p>Application has been accepted 🎉 🙌</p>
                <p>Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...</p>
            </div> */}
            
        </div>
    </div>
  )
}

export default ContentComponent