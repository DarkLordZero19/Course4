import React, { useState } from "react";

export default function FeedbackForm() {
  // Состояния для каждого поля формы
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("good");
  const [agreed, setAgreed] = useState(false);

  // Обработчики изменений
  const handleNameChange = (event) => setName(event.target.value);
  const handleFeedbackChange = (event) => setFeedback(event.target.value);
  const handleRatingChange = (event) => setRating(event.target.value);
  const handleAgreedChange = (event) => setAgreed(event.target.checked);

  // Обработка отправки формы
  const handleSubmit = (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    // Собираем данные формы
    const formData = {
      name: name,
      feedback: feedback,
      rating: rating,
      agreed: agreed,
    };

    console.log("Данные формы:", formData);
    alert(`Спасибо за отзыв, ${name || "пользователь"}!`);
    // Сброс формы
    setName("");
    setFeedback("");
    setRating("good");
    setAgreed(false);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      {/* Имя пользователя */}
      <div className="form-group">
        <label htmlFor="name">Ваше имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Введите ваше имя"
        />
      </div>

      {/* Текст отзыва */}
      <div className="form-group">
        <label htmlFor="feedback">Ваш отзыв:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Напишите ваш отзыв..."
        />
      </div>

      {/* Оценка */}
      <div className="form-group">
        <label htmlFor="rating">Оцените наш сервис:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value="excellent">Отлично</option>
          <option value="good">Хорошо</option>
          <option value="satisfactory">Удовлетворительно</option>
        </select>
      </div>

      {/* Согласие на обработку данных */}
      <div className="form-group checkbox-group">
        <label>
            <input
              type="checkbox"
              id="agreed"
              checked={agreed}
              onChange={handleAgreedChange}
            />
            Я согласен на обработку данных
        </label>
      </div>

      {/* Кнопка отправки */}
      <button type="submit">Отправить</button>
    </form>
  );
}