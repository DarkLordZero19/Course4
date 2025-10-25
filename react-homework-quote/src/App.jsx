import React from 'react';
import './App.css'
import QuoteCard from "./QuoteCard"

function App(){
  return (
    <div className='app-container'>
      <h1>Цитата дня:</h1>
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
    </div>
  )
}

export default App;
