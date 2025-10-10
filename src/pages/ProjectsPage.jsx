import { Link } from "react-router-dom";

function ProjectsPage() {
 document.title = "Проекты - Мое портфолио";
 
 return (
  <div className="page">
   <h1>Проекты</h1>
   <p>Ниже — несколько примеров моих учебных и личных проектов:</p>
   <ul className="project-list">
    <li><Link to="/projects/1">Project 1 - Мини-соцсеть</Link></li>
    <li><Link to="/projects/2">Project 2 - Онлайн-магазин</Link></li>
    <li><Link to="/projects/3">Project 3 - Персональный-блог</Link></li>
    <li><Link to="/projects/4">Project 4 - Весёлое-времяпровождение</Link></li>
   </ul>
  </div>
 );
}

export default ProjectsPage;