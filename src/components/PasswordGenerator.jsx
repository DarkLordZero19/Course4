import React, { useState, useEffect } from "react";

const PasswordGenerator = () => {
    // используется как состояния для настроек
    const [generated, setGenerated] = useState(""); // сам пароль
    const [size, setSize] = useState(12);           // длина
    const [withDigits, setWithDigits] = useState(true);   // цифры
    const [withSpecials, setWithSpecials] = useState(false); // символы
    // генератор пароля
    const makePassword = () => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (withDigits) chars += "0123456789";
        if (withSpecials) chars += "!@#$%^&*()";
        let pwd = "";
        for (let i = 0; i < size; i++) {
          const idx = Math.floor(Math.random() * chars.length);
          pwd += chars[idx];
        }
        return pwd;
      };
    // автоматически обновляет пароль при изменении настроек
    useEffect(() => {
        const newPwd = makePassword();
        setGenerated(newPwd);
    }, [size, withDigits, withSpecials]);

    return (
        <div className="password-tool">
          {/* область отображения */}
          <div className="output">
            <strong>{generated}</strong>
          </div>
          {/* блок с настройками */}
          <div className="options">
            <div>
              <label>
                Длина: {size}
                <input
                  type="range" // радиус
                  min="8" // минимум
                  max="32" // максимум
                  value={size} // длина
                  onChange={(e) => setSize(Number(e.target.value))} // изменение значения элемента формы
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox" // галочка включить/выключить
                  checked={withDigits}
                  onChange={(e) => setWithDigits(e.target.checked)}
                />
                Включить цифры
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox" // галочка включить/выключить
                  checked={withSpecials}
                  onChange={(e) => setWithSpecials(e.target.checked)}
                />
                Включить символы
              </label>
            </div>
          </div>
        </div>
    );
};

export default PasswordGenerator;