import React  from 'react'



const EditTodo = ({todo, setTodo, onSubmit}) => {
  return (
    <form className="EditTodo" onSubmit={onSubmit}>
        <input type="text"
        placeholder='Edit todo Item'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>Save</button>
    </form>
  );
}

export default EditTodo

// echo "# TodoApp" >> README.md
// git init
// git add README.md
// git commit -m "Todo App Display Todo items"
// git branch -M main
// git remote add origin https://github.com/Akbar286/TodoApp.git
// git push -u origin main