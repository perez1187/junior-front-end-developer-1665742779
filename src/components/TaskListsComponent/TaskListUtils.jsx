
import { icons, userTasks, taskStyles } from './MockedData'

import './TaskListComponentName.css'

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


export function RenderingTaskObjects(){



    function findTaskStyles(iconId){
        try{
            const object = taskStyles.find(obj => obj.id === iconId)
            return (object.name)
    
        } catch(e) {
            return (console.log("wrong id"))
        } 
    }


    const listItems = userTasks.map(
        (element) => {
            return (
                <div className='TaskTest' key={element.id}>
                    <img src={findIcon(element.status)} alt={findAlt(element.statusIcon)} className="TaskListIcon"></img>
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
