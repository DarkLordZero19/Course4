import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Учебная база данных фильмов на React.</p>
      <Link to="/movies">Перейти к фильмам</Link>
    </div>
  );
}