import React from "react";
import "./App.css";

function QuoteCard(){
    const quoteText = "Цитата: Что разум человека может постигнуть и во что он может поверить, того он способен достичь";
    const author = "Автор: Наполеон Хилл";
    return (
        <blockquote className="quote-card">
            <p className="quote-text">{quoteText}</p>
            <p className="author">{author}</p>
        </blockquote>
    );
}

export default QuoteCard;