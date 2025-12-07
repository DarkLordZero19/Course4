import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {
  const { favoriteIds } = useContext(FavoritesContext);
  const favMovies = movies.filter((m) => favoriteIds.includes(m.id));
  return (
    <div>
      <h1>Избранное</h1>

      {favMovies.length === 0 ? (
        <p>Пусто. Добавьте фильмы в избранное.</p>
      ) : (
        <div className="movies-grid">
          {favMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}