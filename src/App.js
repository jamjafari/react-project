import React, { useState } from "react";
import TopTask from './TopTask';
import TaskForm from './TaskForm';
import { taskContext } from "./taskContext";

const App= ()=>{
    const [taskItem,setTaskItem]=useState([
        // {
        //     id:1,
        //     title:'task-1',
        //     done:true
        // },
        // {
        //     id:2,
        //     title:'task-2',
        //     done:false
        // },
        // {
        //     id:3,
        //     title:'task-3',
        //     done:true
        // }
    ])
    return(
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">

           <div className=" text-center col-12 col-md-8 col-lg-6 col-xl-4 bg-light shadow rounded-3 p-3 h-fit">
             <taskContext.Provider value={{
                taskItem,
                setTaskItem
             }}>
                <TopTask/>
                <TaskForm/>
             </taskContext.Provider>
            </div>
          </div>
            
        </div>
    )
}
export default App
