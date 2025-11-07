import React from 'react';
import NoteTaker from './components/NoteTaker';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Учебный проект: useEffect + localStorage:</h1>
      </header>
      <main>
        <NoteTaker />
      </main>
    </div>
  );
}