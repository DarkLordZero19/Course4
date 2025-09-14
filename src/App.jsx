import { useState } from 'react'
import './App.css'
import Modal from "./components/Modal.jsx";

function App() {
  // Состояние
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Функции-обработчики
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Приложение с модальным окном</h1>
      <button onClick={openModal}>Открыть окно</button>
      {/* Условный рендеринг */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Добро Пожаловать</h2>
          <p>Это содержимое модального окна!</p>
        </Modal>
      )}
    </div>
  );
}

export default App
