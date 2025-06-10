import { useContext, useState } from "react";
import Delet from "./delet";
import Edit from "./edit";
import { NewContext } from "./NewContext";

export default function ToDoItem({todo}){
    let [Editmode, setEditMode] = useState(false);
    let {removeHandeler,EditHandeler,HandelerChecked} = useContext(NewContext);
    function closeInput(){
        if (event.key=="Enter") {
            EditHandeler(todo.id,event.target.value)
            setEditMode(false)
        }
    }
    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            {
                Editmode?
                <input onKeyDown={()=>{closeInput()}} defaultValue={todo.name} onChange={()=>{EditHandeler(todo.id)}} type="text" className="w-full px-2 py-3 border rounded outline-none border-grey-600"/>
                : (
                <div>
                    <div>
                <input type="checkbox" className="" checked={todo.status} onChange={()=>{HandelerChecked(todo.id)}}/>
                <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status ? "line-through":""}`}>{todo.name}</p>
            </div>
            <button type="button" className="absolute right-0 flex items-center space-x-1">
                <Edit setEditMode={setEditMode}/>
                <Delet removeHandeler={removeHandeler} todo={todo}/>
            </button>
                    </div>
                )
            }
            
        </li>
    )
}