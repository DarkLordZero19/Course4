import { useState } from 'react'
import './App.css'
import questions from "./questions"; // импорт массива вопросов
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedOptionIndex) => {
    // Проверяем правильность ответа
    if (selectedOptionIndex === currentQuestion.correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    // Проверяем, последний ли вопрос
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Перезапуск квиза
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="app-container">
      <h1>React Quiz App</h1>

      {isQuizFinished ? (
        <Results
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestartQuiz}
        />
      ) : (
        <Question questionData={currentQuestion} onAnswer={handleAnswerClick} />
      )}
    </div>
  );
}

export default App
