import React,{useState} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";



const TodoList = () => {

    const [todos, setTodos] = useState([]);
//this function is for adding the todo into todos
    function addTodo(todo)
    {
        setTodos([...todos,todo]);
    }
// this function is for deleting the todo from todos
    function deleteTodo(index)
    {
        const newtodos = [...todos]
        newtodos.splice(index, 1)
        setTodos(newtodos)

    }

    function editTodo(index, newTodo)
    {
        const newTodos = [...todos];
        newTodos[index] = newTodo
        setTodos(newTodos)
    }

  return (
    <div className="todoList">
        <h1>To-Do List</h1>
        {todos.map( (todo, index) => (
             <TodoItem
             key={index}
             index={index}
             todo={todo}
             deleteTodo={deleteTodo}
             editTodo={editTodo}
             />
        ))}
         <AddTodo addTodo={addTodo}/>  
    </div>
  )
}

export default TodoList