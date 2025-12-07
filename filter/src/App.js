import React, { useState } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import ProductList from './components/ProductList';
import { initialProducts } from './data/products';
import { useProducts } from './hooks/useProducts';
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const { products, filters, setFilters, filteredProducts } = useProducts(initialProducts);
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  const maxPriceLimit = Math.max(...products.map(p => p.price), 0);
  return (
    <div className="app">
      <Header />
      <div className="controls-row">
        <button onClick={() => setCount(c => c + 1)}>Клик: {count}</button>
      </div>
      <div className="layout">
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          categories={categories}
          maxPriceLimit={maxPriceLimit}
        />
        <main className="main-area">
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
