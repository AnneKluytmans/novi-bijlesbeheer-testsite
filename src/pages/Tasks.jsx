import { tasks } from '../data/tasks'
import { Link } from 'react-router-dom'

export default function Tasks() {
  return (
    <div>
        <h1>Taken</h1>

        <h4>
            Hieronder staat een overzicht van de verschillende taken. 
        </h4>

        {tasks.map((task) => (
            <div key={task.id} style={{ marginBottom: "20px" }}>
                <h3>{task.title}</h3>

                <Link to={`/task/${task.id}`}>
                    <button>Start taak</button>
                </Link>
            </div>
        ))}
    </div>
  );
}
