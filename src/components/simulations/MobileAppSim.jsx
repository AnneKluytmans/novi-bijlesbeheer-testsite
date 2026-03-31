export default function MobileAppSim() {
  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "0 auto",
        border: "1px solid #ccc",
        padding: "10px"
      }}
    >
      <h4>📱 Medewerkers App</h4>
      <p><b>Alleen mobiel</b></p>

      <div style={{ background: "#f1f1f1", padding: "10px" }}>
        <p>📅 Les met Emma</p>
        <p>📍 Aan huis</p>
        <p>⏰ 15:00 - 16:00</p>
      </div>

      <p style={{ marginTop: "10px", fontSize: "12px" }}>
        Je kunt deze les niet aanpassen.
      </p>
    </div>
  );
}