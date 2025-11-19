import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import "../styles/TodoStyles.css";

const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу..."
      />
      <button className="todo-btn" type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;