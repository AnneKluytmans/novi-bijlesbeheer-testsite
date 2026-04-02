import { NavLink } from "react-router-dom";
import { tasks } from "../../data/tasks";

export default function TasksNav() {
  return (
    <nav className="tasks-nav">
      {tasks.map((task) => (
        <NavLink
          key={task.id}
          to={`/taak/${task.id}/context`}
          className={({ isActive }) =>
            isActive ? "task-nav-link active" : "task-nav-link"
          }
        >
          Taak {task.id}
        </NavLink>
      ))}
    </nav>
  );
}