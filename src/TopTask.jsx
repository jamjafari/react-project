import React, { useContext, useState } from "react"
import { taskContext } from "./taskContext";
const TopTask=() =>{
    const [task, setTask]=useState("")
    const {taskItem,setTaskItem}=useContext(taskContext);

    const handleSetTask=(e)=>{
        setTask(e.target.value)
        console.log(task);  
    }

    const addTaskItem=(e)=>{
        e.preventDefault()
        setTaskItem([...taskItem,{id:Math.random(),title:task,done:false}])
        setTask("")
    }

    return(
        <>
            <h4 className="text-center text-info text-shadow">My Todo App</h4>
            <form onSubmit={addTaskItem}>
                <div className="form-group d-flex">
                    <input value={task} onChange={handleSetTask} type="text" className="form-control"/ >
                    <button type="submit" className="btn btn-success me-1">Register</button>
                </div>
            </form>
        </>
        )
 
}
export default TopTask;