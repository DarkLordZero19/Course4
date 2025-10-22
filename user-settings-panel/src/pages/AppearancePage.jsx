import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AppearancePage() {
    const {theme, toogleTheme} = useContext(ThemeContext);
    return (
        <div className="appearance-container">
            <h2>Настройки внешнего вида</h2>
            <p>Текущая тема: <strong>{theme === "light" ? "Светлая" : "Тёмная"}</strong></p>
            <button onClick={toogleTheme}>Переключить тему</button>
        </div>
    );
}

export default AppearancePage;