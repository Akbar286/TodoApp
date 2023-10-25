import React, { useState } from "react";
import EditTodo from "./EditTodo"




const TodoItem = ({index, todo, deleteTodo, editTodo}) => {
    const[isEditing, setIsEditing] = useState(false);
    const[newTodoText, setNewTodoText] = useState(todo);

    function handleEditSubmit(e)
    {
        e.preventDefault();
        editTodo(index, newTodoText);
        setIsEditing(false);
    }
  
    return (
    <div className="TodoItem">
        <p>{todo}</p>
        <button onClick={() => deleteTodo(index)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        {isEditing && (
           <EditTodo
           todo={newTodoText}
           setTodo={setNewTodoText}
           onSubmit={handleEditSubmit}
           />
        )}
    </div>
  );
}

export default TodoItem

