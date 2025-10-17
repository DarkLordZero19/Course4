import React from 'react';
import { products } from '../products';
import ProductCard from './ProductItem';
import '../App.css';

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;