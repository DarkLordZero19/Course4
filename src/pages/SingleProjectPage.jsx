import { Link } from "react-router-dom";
import { useParams } from "react-router";

function SingleProjectPage() {
 const { projectId } = useParams();
 document.title = `Проект №${projectId} - Мое портфолио`;

 return (
  <div className="page">
   <h1>Проект №{projectId}</h1>
   <p>
    Это описание проекта №{projectId}. 
    Здесь может быть информация о задачах, технологиях и особенностях реализации.
   </p>
   <p>
    Если хотите вернуться к общему списку, нажмите ниже.
   </p>
   <Link className="back-link" to="/projects">
    К списку проектов
   </Link>
  </div>
 );
}

export default SingleProjectPage;