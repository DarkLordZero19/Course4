import React, { createContext, useCallback, useState } from "react";

export const FavoritesContext = createContext({
    favoriteIds: [],
    toggleFavorite: () => {}
});

export function FavoritesProvider ({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);
    const toggleFavorite = useCallback ((contactId) => {
        setFavoriteIds(prev => {
            if (prev.includes(contactId)) return prev.filter(id => id !== contactId);
            return [...prev, contactId]
        });
    }, []);
    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}