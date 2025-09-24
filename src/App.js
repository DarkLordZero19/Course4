import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Добавление новой задачи
  const addTodo = (todoText) => {
    if (todoText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  // Удаление задачи
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  // Переключение статуса выполнения
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Мой Список Задач</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
