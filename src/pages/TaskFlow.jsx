import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { tasks } from '../data/tasks'

export default function TaskFlow() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  const [step, setStep] = useState(0);

  if (!task) return <p>Taak niet gevonden</p>;

  return (
    <div>
      <h2>{task.title}</h2>

      {step === 0 && (
        <div>
          <p>
            Je hebt net een bijles gegeven. Plan een nieuwe afspraak.
          </p>

          <button onClick={() => setStep(1)}>Volgende</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3>Hoe pak je dit aan?</h3>

          <button>Mondeling tijdens les</button>
          <button>Via WhatsApp/email met de ouder</button>
          <button>Via WhatsApp/email met de leerling</button>
          <button>Vast moment plannen</button>
          <button>Wisselend, afhankelijk van de klant wil</button>
          <button>Anders, namelijk...</button>

          <br /><br />

          <button onClick={() => setStep(2)}>Volgende</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Reflectie</h3>

          <p>Waarom kies je hiervoor?</p>

          <textarea rows="4" style={{ width: "100%" }} />

          <br /><br />

          <p>Werkt dit goed?</p>

          <textarea rows="4" style={{ width: "100%" }} />

          <button onClick={() => setStep(3)}>Afronden</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Klaar ✅</h3>
          <p>Ga terug naar de takenlijst.</p>
        </div>
      )}
    </div>
  );
}