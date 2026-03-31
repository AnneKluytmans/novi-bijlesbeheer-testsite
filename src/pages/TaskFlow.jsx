import { useParams } from "react-router-dom";
import { useState } from "react";
import { tasks } from "../data/tasks";
import { simulationComponents } from "../components/simulations";

export default function TaskFlow() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  if (!task) return <p>Taak niet gevonden</p>;

  const step = task.steps[stepIndex];

  const next = () => {
    setSelected(null);
    setStepIndex(stepIndex + 1);
  };

  return (
    <div>
      <h2>{task.title}</h2>

      {/* INTRO */}
      {step?.type === "intro" && (
        <>
          <p>{step.content}</p>
          <button onClick={next}>Volgende</button>
        </>
      )}

      {/* SIMULATION */}
      {step?.type === "simulation" && (
        <>
          {(() => {
            const Sim = simulationComponents[step.component];
            return <Sim />;
          })()}

          <button onClick={next}>Volgende</button>
        </>
      )}

      {/* CHOICES */}
      {step?.type === "choices" && (
        <>
          <h3>{step.question}</h3>

          {step.options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={selected === opt ? "selected" : ""}
            >
              {opt}
            </button>
          ))}

          <br />
          <button onClick={next}>Volgende</button>
        </>
      )}

      {/* REFLECTION */}
      {step?.type === "reflection" && (
        <>
          <h3>{step.question}</h3>
          <textarea rows="4" />
          <button onClick={next}>Afronden</button>
        </>
      )}

      {/* EINDE */}
      {stepIndex >= task.steps.length && (
        <>
          <h3>Klaar ✅</h3>
          <p>Ga terug naar de takenlijst.</p>
        </>
      )}
    </div>
  );
}