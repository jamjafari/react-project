import React,{ useContext } from "react"
import { taskContext } from "./taskContext"

const TaskForm=()=>{
    const {taskItem,setTaskItem}=useContext(taskContext);
    console.log(taskItem);

    const handleDeleteItem=(id)=>{
        setTaskItem(taskItem.filter(t=>t.id!=id))
    }

    const handleDoneItem=(id)=>{
        let index=taskItem.findIndex(t=>t.id===id);
        let newTaskItem=[...taskItem]
        newTaskItem[index].done=!newTaskItem[index].done
        
        setTaskItem(newTaskItem)

    }

    if(taskItem.length){

        return(
            <>
            <ul className=" list-group mt-2 m-0 p-0">
                {taskItem.map(c=>(
    
                <li key={c.id} className={`list-group-item d-flex justify-content-between ${c.done ? "list-group-item-success" : ""}`}>
                   {c.title}
                    <span >
                        <i onClick={()=>handleDoneItem(c.id)} className={`me-3 pointer ${c.done ? "fas fa-times text-warning": "fas fa-check text-success" }  transition_200 text_hover_shadow`}></i>
                        <i onClick={()=>handleDeleteItem(c.id)} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                    </span>
                </li>
                ))}
            </ul>
    
            </>
        )
    }
    else
    {
      return  <h4 className=" mt-4  text-center text-danger">Dont any register task!?</h4>
    }
}
export default TaskForm