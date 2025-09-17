import React from "react";

const Question = ({ questionData, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>{questionData.text}</h2>

      <div className="options-list">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;