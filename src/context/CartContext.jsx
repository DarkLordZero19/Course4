import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const contextValue = {
    cart,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};