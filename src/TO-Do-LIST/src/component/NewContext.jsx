import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


export let NewContext = createContext();

export function AppDataProvider({children}){
    let [todos,setTodos] = useState([
        {id:uuidv4(),name:"mony for me" , status:false},
        {id:uuidv4(),name:"my name is vornex-01" , status:true},
        {id:uuidv4(),name:"my system kali linux" , status:false}
    ])
    
    function HandelerChecked(todoId){
        let updatedTodo = todos.map(
            (item) =>{
                if (item.id == todoId) {
                    item.status = !item.status
                    return item
                }
                return item
            }
        )
        setTodos(updatedTodo)
    }

    function removeHandeler(t){
        let updatedTodos2 = todos.filter(
            (item)=>{
                return item.id != t
            }
        )
        setTodos(updatedTodos2);
    }

    function EditHandeler(todoId, newName){
        let updatedTodos3 = todos.map(
            (item)=>{
                if (item.id == todoId) {
                    item.name = newName;
                    return item
                }
                return item
            }
        )
        setTodos(updatedTodos3)
    }

    return(
        <NewContext.Provider value={{todos,setTodos,HandelerChecked,removeHandeler,EditHandeler}}>
            {children}
        </NewContext.Provider>
    )
}