import React from "react";
import "./todo.css"

export default function Todos({ todos, whatDisplay, onChange, changeDisplayedTodos }) {
  return (
    <div className="content">
      <button name='uncompleted' onClick={changeDisplayedTodos}>Uncompleted</button>
      <button name='completed' onClick={changeDisplayedTodos}>Completed</button>
      <button name='all' onClick={changeDisplayedTodos}>All</button>
      
        <p>Displayed tasks: {whatDisplay}</p>
        {todos.map(todo =>
          <div className="todo" key={todo.id}>
            <h4>{todo.title}</h4>
            <p>Id/Author id: {todo.id}/{todo.userId}</p>
            task completed <input name={todo.id} type="checkbox" checked={todo.completed} onChange={onChange} />
          </div>
        )}
    </div>
  );
}



