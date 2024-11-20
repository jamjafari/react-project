import { createContext } from "react";

export const taskContext=createContext({
    taskItem:[],
    setTaskItem:()=>{}
})