import React from 'react';
export default function FilterPanel({ filters, setFilters, categories, maxPriceLimit }) {
  console.log('FilterPanel перерисовался');
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFilters(prev => ({ ...prev, category }));
  };
  const handleMaxPriceChange = (e) => {
    const maxPrice = Number(e.target.value);
    setFilters(prev => ({ ...prev, maxPrice }));
  };
  return (
    <aside className="filter-panel">
      <div className="filter-row">
        <label>Категория:</label>
        <select value={filters.category} onChange={handleCategoryChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'Все' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-row">
        <label>Макс. цена: {filters.maxPrice} ₽</label>
        <input
          type="range"
          min="0"
          max={maxPriceLimit}
          value={filters.maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </aside>
  );
}