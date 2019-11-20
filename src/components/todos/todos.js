import React from "react";
import PropTypes from 'prop-types';
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

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      userId: PropTypes.number,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  whatDisplay: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  changeDisplayedTodos: PropTypes.func.isRequired
}