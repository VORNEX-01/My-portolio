import { useContext } from "react";
import ToDoItem from "./todoitem";
import { NewContext } from "./NewContext";

export default function ToDoList(){
    let{todos} = useContext(NewContext);
    return(
        <ul className="list-reset">
            {
            todos.map(
                (todo, index)=><ToDoItem key={index} todo={todo} />
                )
            }
            
        </ul >
    )
}