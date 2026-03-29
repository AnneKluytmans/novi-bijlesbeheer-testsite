import { Link } from "react-router-dom";

export default function Tasks() {
  return (
    <div className="container">
      <h1>Taken</h1>

      <p>
        Hieronder staat een overzicht van de verschillende taken. Klik op een taak om deze te verkennen. 
      </p>

      <div className="task-list">
        <Link to="/basisschool/context">
          Les plannen (basisschool)
        </Link>
        <Link to="/middelbare/context">
          Les plannen (middelbare)
        </Link>
        <Link to="/lvs/context">
          Les in LVS zetten
        </Link>
        <Link to="/overige">
          Overige situaties
        </Link>
      </div>
    </div>
  );
}
