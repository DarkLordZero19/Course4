import { useEffect } from "react";

function NotFoundPage() {
    useEffect(() => {
        document.title = "404 — Страница не найдена";
    }, []);

    return (
      <div className="not-found">
        <h2>404 — Страница не найдена</h2>
        <p>Проверьте правильность введённого адреса.</p>
      </div>
    );
  }
  
export default NotFoundPage;