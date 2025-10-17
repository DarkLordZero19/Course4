import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <h1>React Store</h1>
      <div className="cart-indicator">
        Корзина: {cart.length}
      </div>
    </header>
  );
};

export default Header;