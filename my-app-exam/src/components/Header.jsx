import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from '../context/FavoritesContext';
import "../App.css";

function Header() {
    const {favoriteIds} = useContext(FavoritesContext);
    return (
        <header className="header">
            <h1>Панель настроек:</h1>
            <nav className="nav-links">
                <NavLink to="/contacts" end className={({isActive}) => (isActive ? "active-link" : "")}>
                    <div className="contact-name">Контакты:</div>
                </NavLink>
                <span className="favorite-count">Избранных: {favoriteIds.length}</span>
            </nav>
        </header>
    );
}

export default Header;