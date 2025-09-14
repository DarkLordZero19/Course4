import React from 'react'
import './App.css'
import FeatureCard from "./components/FeatureCard";

function App() {
  // Массив преимуществ
  const features = [
    {
      id: "f1",
      title: "Скорость",
      description: "Наше приложение работает молниеносно и без задержек.",
    },
    {
      id: "f2",
      title: "Удобство",
      description: "Интерфейс прост и понятен каждому пользователю.",
    },
    {
      id: "f3",
      title: "Безопасность",
      description: "Ваши данные надежно защищены современными методами шифрования.",
    },
    {
      id: "f4",
      title: "Поддержка",
      description: "Наша команда всегда готова помочь вам 24/7.",
    },
  ];

  return (
    <div className="app-container">
      <h1>Преимущества продукта:</h1>

      {/* Сетка для карточек */}
      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id} // Уникальный ключ
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App
