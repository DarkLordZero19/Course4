import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import AppearancePage from "./pages/AppearancePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/appearance" element={<AppearancePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
