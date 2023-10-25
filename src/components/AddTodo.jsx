import React,{useState} from "react";

const AddTodo = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
    } 
  return (
    <form  className="AddTodo" onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Enter new Todo Itme"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
         />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo