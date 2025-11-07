import './App.css';
import React, { useEffect, useState } from "react";
import productsData from "./products"; 
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
 const [cartItems, setCartItems] = useState([]);
 const handleAddToCart = (productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
  }
};
 const handleRemoveItem = (id) => {
  setCartItems(cartItems.filter((item) => item.id !== id));
 };
 const [totalPrice, setTotalPrice] = useState(0);
 //useEffect{}
  return (
    <div className="App" style={{ display: "flex", gap: "40px" }}>
      <div style={{ flex: 1 }}>
      <h1>Витрина товаров</h1>
        <ProductList products={productsData} onAddToCart={handleAddToCart} />
      </div>

      <div style={{ flex: 1 }}>
        <ShoppingCart items={cartItems} onRemoveItem={handleRemoveItem} />
      </div>
    </div>
  );
}

export default App;