import React, { useState, useEffect } from "react";
import { itemList } from "../data";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemList);

  // Эффект фильтрации, оно зависит от searchTerm
  useEffect(() => {
    const normalized = searchTerm.trim().toLowerCase(); // Возвращает значение строки, преобразованное в нижний регистр.

    if (normalized === "") {
      setFilteredItems(itemList);
      return;
    }
    const newFilteredList = itemList.filter((item) =>
      item.toLowerCase().includes(normalized)
    );

    setFilteredItems(newFilteredList);
  }, [searchTerm]);

  // Эффект, который должен выполняться один раз (массив зависимостей пустой [])
  useEffect(() => {
    document.title = "Интерактивный фильтр поиска";
  }, []); // Пустой массив значит "один раз при монтировании"

  return (
    <div className="App">
      <div className="search-container">
        <h2>Интерактивный фильтр поиска</h2>
        <input
          type="text"
          placeholder="Начните вводить для поиска..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} // Возвращает элемент после события
        />

        {/* Пустой массив */}
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <li key={item}>{item}</li>)
          ) : (
            <li>Ничего не найдено</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
