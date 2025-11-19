import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import "../styles/TodoStyles.css";

const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p className="empty-list">Список пуст.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <span className="todo-text">{todo.text}</span>
          <div className="todo-controls">
            <button className="todo-small-btn" onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Вернуть" : "Готово"}
            </button>
            <button className="todo-delete-btn" onClick={() => removeTodo(todo.id)}>
              Удалить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;