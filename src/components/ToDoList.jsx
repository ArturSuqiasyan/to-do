import { useState } from "react";
import { AddToDo } from "./AddToDo";
import { FilterToDo } from "./FilterToDo";
import { List } from "./List";
import { todosContext } from './context';

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 101, text: "Go for a walk", completed: false },
        { id: 102, text: "Have a coffee", completed: true },
        { id: 103, text: "Do workout", completed: false },
    ]);

    const [currentFilter, setCurrentFilter] = useState("all");

    const handleAdd = (text) => {
        setTodos([
            ...todos,
            { text, completed: false, id: Date.now() }  
        ]);
    };

    const handleUpdate = (id) => {
        setTodos(todos.map(todo =>
            todo.id !== id ? todo : { ...todo, completed: !todo.completed } 
        ));
    };

    return (
        <>
             <todosContext.Provider value={{ todos, currentFilter, onUpdate: handleUpdate, onSet: setCurrentFilter }}> 
                <AddToDo />
                <FilterToDo  />
                <List/>
             </todosContext.Provider> 
        </>
    );
};