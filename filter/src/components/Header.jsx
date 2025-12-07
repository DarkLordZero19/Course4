import React from 'react';

function Header() {
  console.log('Header перерисовался');
  return (
    <header className="header">
      <h1>Магазин товаров — панель фильтров</h1>
    </header>
  );
}

export default React.memo(Header);