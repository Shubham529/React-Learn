import React from "react";
import { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] =useState("");
    const submit = (e)=>{
        e.preventDefault();  //Prevent loading of todo adeded baar baar refresh nhi krenga   
        if(!title || !desc){
            alert("Title and Description can't be empty")
        }
        else{
       addTodo(title,desc);
       setDesc("");
       setTitle("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Todo Tittle
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value = {title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        id="title"
                        aria-describedby="emailHelp"
                    />
                
                       
                    </div>
               
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                        className="form-control"
                        id="desc"
                    />
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">
                    Submit
                </button>
            </form>
        </div>
    );
}

