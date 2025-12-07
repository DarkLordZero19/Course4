import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === Number(movieId));
  if (!movie) {
    return (
      <div>
        <h2>Фильм не найден</h2>
        <Link to="/movies">Назад</Link>
      </div>
    );
  }
  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <p><strong>Режиссёр:</strong> {movie.director}</p>
        <p><strong>Год:</strong> {movie.year}</p>
        <p><strong>Рейтинг:</strong> {movie.rating}</p>
        <p>{movie.description}</p>
        <Link to="/movies">← Назад к списку</Link>
      </div>
    </div>
  );
}