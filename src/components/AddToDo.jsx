import { useContext, useState } from "react"
import { todosContext } from './context'


export const AddToDo = () => {
    const { onAdd } = useContext(todosContext)
    const [text, setText] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        if (text.trim()) {
            onAdd(text);  
            setText("");  
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text} 
                    onChange={event => setText(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};