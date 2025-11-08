import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import Avatar from "./Avatar.jsx";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      <Avatar />
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
