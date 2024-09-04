import { useContext, useState } from "react"
import { todosContext } from './context'
import { ToDoItem } from './ToDoItem';

export const List = () => {
   const {todos, currentFilter, onUpdate } = useContext(todosContext)
    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(a => !a.completed);
    } else if (currentFilter === "completed") {
        filtered = todos.filter(a => a.completed);
    }

    return (
        <>
            <p>Showing: <strong>{currentFilter}</strong></p>
            {
                filtered.map(todo => (
                    <ToDoItem 
                        key={todo.id}
                        todo={todo}
                        onUpdate={onUpdate}
                    />
                ))
            }
        </>
    );
};