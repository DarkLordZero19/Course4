import { useState } from 'react'
import faqData from './faqData';
import AccordionItem from './components/AccordionItem';
import './App.css'

function App() {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggleItem = (itemId) => {
    // Если клик по уже открытому — закрываем
    setOpenItemId(prevId => (prevId === itemId ? null : itemId));
  };
    // Контейнер с ответами
  return (
    <div className="app-container">
      <h1>Часто задаваемые вопросы</h1>
      <div className="accordion">
        {faqData.map(item => (
          <AccordionItem
            key={item.id}
            itemData={item}
            isOpen={openItemId === item.id}
            onToggle={handleToggleItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App
