import { useState } from 'react'
import './App.css'
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [products, setProducts] = useState([]);

  // Добавление продукта
  const addProduct = ({ title, category, important }) => {
    if (title.trim() === "") return;

    const newProduct = {
      id: Date.now(),
      title,
      category,
      important,
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  // Удаление продукта
  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Очистка списка
  const clearList = () => {
    setProducts([]);
  };

  // Статистика
  const total = products.length;
  const importantCount = products.filter((p) => p.important).length;

  return (
    <div className="app-container">
      <h1>Список покупок для вечера:</h1>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onRemove={removeProduct} />

      {/* Статистика */}
      <div className="stats">
        <p>Всего продуктов: {total}</p>
        <p>Важных: {importantCount}</p>
      </div>

      {/* Кнопка очистки списка */}
      {total > 0 && (
        <button className="clear-btn" onClick={clearList}>
          Очистить список
        </button>
      )}
    </div>
  );
}


export default App
