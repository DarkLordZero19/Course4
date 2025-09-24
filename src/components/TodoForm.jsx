import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  // Обработчик изменения текста в инпуте
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault(); // предотвращает перезагрузку страницы
    if (inputValue.trim() === "") return; // не добавляем пустые задачи
    addTodo(inputValue); // вызываем функцию из App
    setInputValue(""); // очищаем поле
  };

  // Ввод
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoForm;