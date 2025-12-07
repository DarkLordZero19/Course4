import React from 'react';
export default function ProductList({ products }) {
  console.log('ProductList перерисовался');
  if (!products || products.length === 0) {
    return <p className="no-products-message">Товары по вашим фильтрам не найдены.</p>;
  }
  return (
    <section className="product-list">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>Категория: {p.category}</p>
          <p>Цена: {p.price} ₽</p>
        </div>
      ))}
    </section>
  );
}