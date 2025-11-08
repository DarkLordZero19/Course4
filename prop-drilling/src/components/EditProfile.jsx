import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const EditProfile = () => {
    const { user, changeName } = useContext(UserContext);
    const [newName, setNewName] = useState(user.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        changeName(newName);
    };

  return (
        <form onSubmit={handleSubmit} className="edit-profile">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Введите новое имя"
            />
        <button type="submit">Сохранить</button>
        </form>
    );
};

export default EditProfile;