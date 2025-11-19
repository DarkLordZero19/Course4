import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/TodoStyles.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Todo List (Context API)</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
