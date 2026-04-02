import TasksNav from '../components/common/TaskNav';
import { tasks } from '../data/tasks'
import { Link } from 'react-router-dom'

export default function Tasks() {
  return (
    <div>
        <h1>Taken</h1>

        <h5> 
            Hieronder staat een overzicht van de verschillende taken. 
            <br></br>
            Deze zullen we tijdens de observatie één voor één doorlopen. 
        </h5>

        <TasksNav />

        {tasks.map((task) => (
            <article key={task.id} style={{ marginBottom: "20px" }} className='section'>
                <h3>{task.title}</h3>
                <p>{task.shortDescription}</p>

                <Link to={`/taak/${task.id}/context`}>
                    <button className='primary-button'>Start taak</button>
                </Link>
            </article>
        ))}
    </div>
  );
}
