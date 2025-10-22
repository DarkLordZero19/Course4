import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="header">
            <h1>Панель настроек</h1>
            <nav className="nav-links">
                <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                    Профиль
                </NavLink>
                <NavLink to="/appearance" end className={({isActive}) => (isActive ? "active" : "")}>
                    Внешний вид
                </NavLink>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
                Тема: {theme === "light" ? "Светлая" : "Тёмная"}
            </button>
        </header>
    );
}

export default Header;