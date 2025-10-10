import { Link } from "react-router-dom";

function NotFoundPage() {
 document.title = "Страница не найдена - Мое портфолио";
 
 return (
  <div>
   <h2>404 - Страница не найдена</h2>
   <p>Проверьте правильность введённого адреса.</p>
   <Link className="back-link" to="/">Вернуться домой</Link>
  </div>
 );
}

export default NotFoundPage;