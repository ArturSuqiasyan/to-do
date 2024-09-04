import { useContext, useState } from "react"
import { todosContext } from './context'
export const ToDoItem = (todo) => {
    const { onUpdate} = useContext(todosContext)
    return <div className={"todo " + (todo.completed ? "done" : "")}>
        <p>{todo.text}</p>
        <button>delete</button>
        <button onClick={()=> onUpdata(todo.id)}>{todo.completed?"CANCEL":"COMPLETE"}</button>
    </div>
}