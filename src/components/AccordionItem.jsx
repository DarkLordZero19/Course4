import React from 'react';

export default function AccordionItem({ itemData, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-title" onClick={() => onToggle(itemData.id)}>
        <h3>{itemData.question}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{itemData.answer}</p>
        </div>
      )}
    </div>
  );
}