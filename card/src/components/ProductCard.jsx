import React, { useState } from "react";
import "../App.css";

function ProductCard({ title, price, description }) {
    const [quantity, setQuantity] = useState(1);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleToggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };
    const totalPrice = price * quantity;
    return (
        <div className="product-card">
            <h2 className="product-title">{title}</h2>
            <div className="price-block">
                <p className="price">Цена: {totalPrice} ₽</p>
                <div className="quantity-controls">
                    <button onClick={handleDecrement}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
            <button className="toggle-btn" onClick={handleToggleDescription}>
                {isDescriptionVisible ? "Скрыть описание" : "Показать описание"}
            </button>
            {isDescriptionVisible && (
                <p className="description">{description}</p>
            )}
        </div>
    )
}

export default ProductCard;