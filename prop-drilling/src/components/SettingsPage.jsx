import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import UserProfile from "./UserProfile.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import EditProfile from "./EditProfile.jsx";

const SettingsPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`settings-page ${theme}`}>
      <h1>Страница настроек</h1>
      <UserProfile />
      <EditProfile />
      <ThemeSwitcher />
    </div>
  );
};

export default SettingsPage;