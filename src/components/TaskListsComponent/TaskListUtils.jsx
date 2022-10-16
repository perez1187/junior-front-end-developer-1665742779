import React, {useState} from 'react'

import { icons, userTasks, taskStyles, taskStatusStyles } from './MockedData'

// css
import './TaskListComponentName.css'
import './TaskListUtils.css'

// icons
import newIcon from '../../assets/icons/Rectangle 963.png'

export function findIcon(iconId){
    try{
        const object = icons.find(obj => obj.id === iconId)
        return (object.icon)

    } catch(e) {
        return (console.log("wrong id"))
    } 
}

export function findAlt(iconId){
    try{
        const object = icons.find(obj => obj.id === iconId)
        return (object.alt)

    } catch(e) {
        return (console.log("wrong id"))
    } 
}

// rendering tasks from your tasks box
export function RenderingTaskObjects(){

    function findTaskStyles(iconId){
        try{
            const object = taskStyles.find(obj => obj.id === iconId)
            return (object.name)
    
        } catch(e) {
            return (console.log("wrong id"))
        } 
    }

    // const [userTaskId, setUserTaskId] = useState('')

    function testClick(userTaskId){
        console.log('click', 'my click',userTaskId)
    }
    const listItems = userTasks.map(
        (element) => {
            return (
                <div className='TaskTest' key={element.id} onClick={() => testClick(element.id)}>
                    <img src={findIcon(element.status)} alt={findAlt(element.status)} className="TaskListIcon"></img>
                    <p className={findTaskStyles(element.status)}>{element.title}</p>            
                </div>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

export function RenderingBusinessContext(userTaskId){

    function findUserTask(taskId){
        try{
            const object = userTasks.find(obj => obj.id === taskId)
            return (object)
    
        } catch(e) {
            return (console.log("wrong id"))
        } 
    }

    function findTaskStatusStylesBox(businessContextStatusId){
        try{
            const object = taskStatusStyles.find(obj => obj.id === businessContextStatusId)
            return (object.box)
    
        } catch(e) {
            return (console.log("wrong id"))
        } 
    }

    function findTaskStatusStylesTitle(businessContextStatusId){
        try{
            const object = taskStatusStyles.find(obj => obj.id === businessContextStatusId)
            return (object.title)
    
        } catch(e) {
            return (console.log("wrong id"))
        } 
    }

    const objectUserTask = findUserTask(userTaskId)

    // checking date (assuming one time zone)
    // date in forma "MM/DD/YYYY"
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }

    function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second-first)/(1000*60*60*24));
    }

    const current = new Date();
    const dateToday = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    //rendering subtasks in business context
    const listItems = objectUserTask.businessContext.map(
        (element) => {
            return (
                <div key={element.id} className={findTaskStatusStylesBox(element.status)}> 
                    <p className='BusinessContextTaskContent'>
                        {element.status === 1 && <img src={newIcon} alt="new task" className='BusinessContextNewIcon'/>}
                        {element.author} • {element.created_at} •  {datediff(parseDate(element.created_at), parseDate(dateToday))} days from today
                    </p>
                    <p className={findTaskStatusStylesTitle(element.status)}>
                        {element.title}
                    </p>
                    <p className='BusinessContextTaskContent'>
                        {element.content}
                    </p>
                </div>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )

}