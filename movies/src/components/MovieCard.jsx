import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favoriteIds.includes(movie.id);
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.year} • {movie.director}</p>
      </Link>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={() => toggleFavorite(movie.id)}
          className={isFavorite ? "favorite" : ""}
        >
          {isFavorite ? "В избранном" : "Добавить"}
        </button>
        <span>{movie.rating}</span>
      </div>
    </div>
  );
}