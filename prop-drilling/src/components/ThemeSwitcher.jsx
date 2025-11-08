import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="theme-btn">
            Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
        </button>
    );
};

export default ThemeSwitcher;