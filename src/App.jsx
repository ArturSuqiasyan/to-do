import './App.css';
import { useState } from 'react';
import { ToDoList } from './components/ToDoList';
import { todosContext } from './components/ToDoList';

export default function App(){
  
  return <>  
    <ToDoList />
  </>
}