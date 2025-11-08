import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Avatar = () => {
    const { user } = useContext(UserContext);

    return (
        <img
            src={`https://i.pravatar.cc/100?u=${user.email}`}
            alt={user.name}
            className="avatar"
        />
    );
};

export default Avatar;