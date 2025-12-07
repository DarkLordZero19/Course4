import React, { useEffect, useState } from "react";
import { movies as allMovies } from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setMovies(allMovies);
        setLoading(false);
      } catch {
        setError("Ошибка загрузки фильмов");
        setLoading(false);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    setDisplayedMovies(
      movies.filter(
        (m) =>
          m.title.toLowerCase().includes(term) ||
          m.director.toLowerCase().includes(term) ||
          String(m.year).includes(term)
      )
    );
  }, [movies, searchTerm]);
  return (
    <div>
      <h1>Фильмы</h1>
      <input
        type="text"
        placeholder="Поиск…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 8, width: "100%", maxWidth: 400, marginBottom: 20 }}
      />
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div className="movies-grid">
          {displayedMovies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}
