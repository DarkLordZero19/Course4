import './App.css';
import { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
<title>Книга рецептов</title>

function App() {
  useEffect(() => {
    document.title = "Книга рецептов";
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Главная
          </NavLink>
          <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active" : "")}>
            Рецепты
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Добро пожаловать в книгу рецептов!</h1>} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
