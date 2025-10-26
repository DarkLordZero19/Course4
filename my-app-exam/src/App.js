import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ContactDetailPage from './pages/ContactDetailPage';
import ContactListPage from './pages/ContactListPage';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" replace />} />
          <Route path="/contacts" element={<ContactListPage />} />
          <Route path="/contacts/:contactId" element={<ContactDetailPage />} />
          <Route path="*" element={<div className="page">Страница не найдена</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
