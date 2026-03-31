import { useState } from "react";

export default function PlanLessonSim() {
  const [selected, setSelected] = useState(null);

  const options = [
        "Mondeling tijdens de les",
        "Na de les met de leerling",
        "Na de les met de ouder",
        "Elke week een vast moment",
        "Wisselend per leerling",
        "Anders, namelijk..."
  ];

  return (
    <div>
      <h3>Simulatie</h3>

      <p>
        Je hebt net een bijles gegeven. Je gaat een nieuwe les inplannen, hoe doe je dit?
      </p>

      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={selected === option ? "selected" : ""}
        >
          {option}
        </button>
      ))}
    </div>
  );
}