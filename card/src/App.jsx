import React from 'react'
import './App.css'
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
    <div className='app'>
      <h1>Магазин React:</h1>
      <ProductCard
        title="Наушники Sony WH-1000XM5"
        price={29990}
        description="Беспроводные наушники с активным шумоподавлением, поддержкой Bluetooth 5.2 и автономностью до 30 часов."
      />
    </div>
    </>
  )
}

export default App
