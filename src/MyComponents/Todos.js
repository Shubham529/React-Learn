import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos =(props) => {
    return (
            <div className ="container my-3">
                <h3 className="text-center">This is the Todos</h3>
              {props.todos.length===0?"No Todos to Display":
               props.todos.map((todo) =>{
               return (
                
               <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
               )
               })
               }
            </div>    

            
         )
}

