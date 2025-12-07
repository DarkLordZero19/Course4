import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Header() {
  const { favoriteIds } = useContext(FavoritesContext);
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Избранное ({favoriteIds.length})
        </NavLink>
      </nav>
    </header>
  );
}