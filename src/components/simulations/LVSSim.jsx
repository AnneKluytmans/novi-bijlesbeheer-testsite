import { useState } from "react";

export default function LessonOverviewSim() {
  const [view, setView] = useState("overview");
  const [loading, setLoading] = useState(false);

  // form states
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [report, setReport] = useState("");
  const [notify, setNotify] = useState(null);

  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setView("done");
    }, 2000); // trage loading
  };

  return (
    <div>
      <h3>Lessen overzicht (LVS)</h3>

      {/* OVERVIEW */}
      {view === "overview" && (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <p><b>Emma – Wiskunde</b></p>
          <p>15:00 - 16:00</p>

          <button onClick={() => setView("start")}>
            Start
          </button>

          <button onClick={() => setView("absent")}>
            Afwezig
          </button>
        </div>
      )}

      {/* START LES */}
      {view === "start" && (
        <div>
          <h4>Les starten</h4>

          <label>Begintijd</label>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label>Eindtijd</label>
          <input
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <details>
            <summary>Lesverslag (optioneel)</summary>

            <textarea
              placeholder="Schrijf hier je verslag..."
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />

            <p>Versturen naar:</p>

            <label>
              <input
                type="radio"
                name="notify"
                onChange={() => setNotify("leerling")}
              />
              Leerling
            </label>

            <br />

            <label>
              <input
                type="radio"
                name="notify"
                onChange={() => setNotify("ouder")}
              />
              Ouder
            </label>

            <br />

            <label>
              <input
                type="radio"
                name="notify"
                onChange={() => setNotify("zelf")}
              />
              Zelf
            </label>
          </details>

          <br />

          {loading ? (
            <p>Bezig met opslaan...</p>
          ) : (
            <button onClick={handleSave}>
              Opslaan
            </button>
          )}
        </div>
      )}

      {/* AFWEZIG */}
      {view === "absent" && (
        <div>
          <h4>Leerling afwezig</h4>

          <textarea placeholder="Opmerking..." />

          <p>Versturen naar:</p>

          <label>
            <input type="checkbox" /> Leerling
          </label>
          <br />
          <label>
            <input type="checkbox" /> Ouder
          </label>
          <br />
          <label>
            <input type="checkbox" /> Zelf
          </label>

          <br /><br />

          {loading ? (
            <p>Bezig met opslaan...</p>
          ) : (
            <button onClick={handleSave}>
              Opslaan
            </button>
          )}
        </div>
      )}

      {/* DONE */}
      {view === "done" && (
        <div>
          <h4>Les afgerond ✅</h4>

          <p><b>Emma – Wiskunde</b></p>
          <p>Begintijd: {startTime || "niet ingevuld"}</p>
          <p>Eindtijd: {endTime || "niet ingevuld"}</p>
          <p>Verslag: {report || "geen verslag"}</p>
          <p>Notificatie: {notify || "niet verstuurd"}</p>
        </div>
      )}
    </div>
  );
}