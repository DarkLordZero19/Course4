import React, { useState } from "react";
import "./StyleEditor.css";

const StyleEditor = () => {
    const [text, setText] = useState("Пример текста");
    const [textColor, setTextColor] = useState("#000000");
    const [fontSize, setFontSize] = useState(16);
    const [isBold, setIsBold] = useState(false);

    const previewStyles = {
        color: textColor,
        fontSize: `${fontSize}px`,
        fontWeight: isBold ? "bold" : "normal",
    };

    return (
        <div className="style-editor">
            {/* Панель управления */}
            <div className="controls">
                <div className="control">
                <label className="text-name">Текст:</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
                <div className="control">
                <label className="text-name">Цвет текста:</label>
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                />
                </div>
                <div className="control">
                <label className="text-name">Размер шрифта ({fontSize}px):</label>
                <input
                    type="range"
                    min="12"
                    max="48"
                    step="1"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                />
                </div>
                <div className="control checkbox">
                <label className="text-name">Жирный шрифт:</label>
                <input
                    type="checkbox"
                    checked={isBold}
                    onChange={(e) => setIsBold(e.target.checked)}
                />
                </div>
            </div>
            {/* Область предпросмотра */}
            <div className="preview" style={previewStyles}>
                {text}
            </div>
        </div>
    );
};

export default StyleEditor;