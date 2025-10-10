import { NavLink } from "react-router-dom";

function Header() {
 const setActive = ({ isActive }) =>
  isActive ? "nav-item active" : "nav-item";
 
 return (
  <header className="header">
   <h2 className="logo">MyPortfolio</h2>
   <nav>
    <NavLink to="/" end className={setActive}>
     Главная
    </NavLink>
    <NavLink to="/about" className={setActive}>
     Обо мне
    </NavLink>
    <NavLink to="/projects" className={setActive}>
     Проекты
    </NavLink>
   </nav>
  </header>
 );
}

export default Header;