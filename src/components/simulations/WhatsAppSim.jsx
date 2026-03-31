import { useState } from "react";

export default function WhatsAppSim() {
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        maxWidth: "300px",
        margin: "0 auto"
      }}
    >
      <h4>WhatsApp</h4>

      <div
        style={{
          height: "150px",
          background: "#f1f1f1",
          marginBottom: "10px",
          padding: "5px"
        }}
      >
        <p><b>Ouder:</b> Wanneer is de volgende les?</p>
      </div>

      <input
        placeholder="Typ een bericht..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%" }}
      />

      <button style={{ marginTop: "5px" }}>
        Verstuur
      </button>
    </div>
  );
}
