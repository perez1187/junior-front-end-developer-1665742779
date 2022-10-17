import { createContext, useState } from "react";

const TaskContext = createContext()

export function TaskContextProvider({children}){

    const [userTaskId, setUserTaskId] = useState(4)

    return(
        <TaskContext.Provider value={{userTaskId, setUserTaskId}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext