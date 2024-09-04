import { useContext} from "react"
import { todosContext } from './context'
export const FilterToDo = () => {
    const {currentFilter, onSet} = useContext(todosContext)
    const list = ["all", "completed", "active"];

    return (
        <>
            {
                list.map((criteria, i) => (
                    <button
                        key={i}
                        className={currentFilter === criteria ? "button-active" : null}
                        onClick={() => onSet(criteria)}
                    >
                        {criteria}
                    </button>
                ))
            }
        </>
    );
};