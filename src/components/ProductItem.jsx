import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div className="product-card">
      <img 
        src={product.image_url} 
        alt={product.name} 
        className="ProductImage"
      />
      <h3>{product.name}</h3>
      <p>{product.price} ₽</p>
      <button onClick={() => addItem(product)}>
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;