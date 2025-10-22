import React, { useState, useEffect } from "react";

function ProfilePage () {
    const [userName, setUserName] = useState("");
    const [userBio, setUserBio] = useState("");
    
    useEffect(() => {
        if (userName.trim() === "") {
            document.title = `Профиль ${userName}`;
        } else {
            document.title = "Профиль";
        }
    }, [userName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Сохранено!\nИмя: ${userName}\nБиография: ${userBio}`);
    };
    
    return (
        <div className="profile-page">
            <h2>Редактирование профиля</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <label>
                    Имя:
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Введите имя"
                    />
                </label>
                <label>
                    Биография:
                    <textarea
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                        placeholder="Расскажите о себе"
                        rows={5}
                    />
                </label>
                <button type="submit">Сохранить</button>
            </form>
            <div xlassName="preview">
                <h3>Предпросмотр</h3>
                <p><strong>Имя:</strong> {userName || "не указано"}</p>
                <p><strong>Биография:</strong> {userBio || "не указана"}</p>
            </div>
        </div>
    );
}

export default ProfilePage;