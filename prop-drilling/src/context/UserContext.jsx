import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Катя Светлановна",
        email: "kyte@example.com",
    });

    const changeName = (newName) => {
        setUser({ ...user, name: newName });
    };

    return (
        <UserContext.Provider value={{ user, changeName }}>
            {children}
        </UserContext.Provider>
    );
};