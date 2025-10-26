import React from "react";
import Card from "./Card";
import "../App.css";

const UserProfile = ({ name, description, avatarUrl }) => {
    return (
        <Card>
            <div className="user-profile-card">
                <img
                    src={avatarUrl}
                    alt={'Аватар пользователя ${name}'}
                    className="user-avatar"
                />
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Card>
    )
}

export default UserProfile;