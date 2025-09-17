import React from "react";

const Results = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="results-card">
      <h2>Результаты</h2>
      <p>
        Вы ответили правильно на <strong>{score}</strong> из{" "}
        <strong>{totalQuestions}</strong> вопросов.
      </p>
      <button onClick={onRestart}>Попробовать снова</button>
    </div>
  );
};

export default Results;