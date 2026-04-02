import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import InstructionBox from "../components/common/InstructionBox";
import ChoiceCard from "../components/common/ChoiceCard";
import ScenarioCard from "../components/common/ScenarioCard";
import FooterNav from "../components/common/FooterNav";
import MobileFrame from "../components/common/MobileFrame";
import DesktopFrame from "../components/common/DesktopFrame";

export default function TestPage() {
  const [selectedChoice, setSelectedChoice] = useState("whatsapp");

  return (
    <main className="test-page">
      <div className="page-container">

        <PageHeader
          title="Testpagina componenten"
          subtitle="Hier kun je alle basiscomponenten bekijken en testen."
        />

        <InstructionBox
          situation="Je hebt net bijles gegeven aan Lisa Jansen en er moet een volgende les worden afgesproken."
          task="Laat zien hoe jij dit normaal zou aanpakken."
          thinkAloud="Vertel hardop wat je doet, waarom je daarvoor kiest en wat je handig of onhandig vindt."
        />

        <section className="demo-section">
          <h2 className="section-title">Choice cards</h2>

          <div className="choice-grid">
            <ChoiceCard
              title="Via WhatsApp"
              description="Je stuurt de leerling of ouder een bericht."
              selected={selectedChoice === "whatsapp"}
              onClick={() => setSelectedChoice("whatsapp")}
            />
            <ChoiceCard
              title="Via e-mail"
              description="Je spreekt de volgende les af per mail."
              selected={selectedChoice === "email"}
              onClick={() => setSelectedChoice("email")}
            />
            <ChoiceCard
              title="Mondeling"
              description="Je spreekt direct na de les een nieuw moment af."
              selected={selectedChoice === "mondeling"}
              onClick={() => setSelectedChoice("mondeling")}
            />
            <ChoiceCard
              title="Vast moment"
              description="Je werkt met een terugkerende afspraak."
              selected={selectedChoice === "vast"}
              onClick={() => setSelectedChoice("vast")}
            />
          </div>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Scenario cards</h2>

          <div className="scenario-stack">
            <ScenarioCard
              title="Edge case: lesverslag vergeten"
              description="Je merkt dat je het lesverslag van vorige week niet hebt ingevuld. Wat doe je nu?"
            />

            <ScenarioCard
              title="Edge case: leerling afwezig"
              description="De leerling blijkt ziek en meldt zich kort van tevoren af."
              variant="warning"
            >
              <p>
                Denk hardop na over wat je zou doen in het LVS en of je nog een
                bericht zou sturen.
              </p>
            </ScenarioCard>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Mobile frame</h2>

          <MobileFrame title="Medewerkersapp">
            <div className="mock-list">
              <div className="mock-list-item">
                <strong>Lisa Jansen</strong>
                <span>02-04-2026 · 16:00 - 17:30</span>
              </div>
              <div className="mock-list-item">
                <strong>Milan de Vries</strong>
                <span>03-04-2026 · 15:30 - 16:30</span>
              </div>
              <div className="mock-list-item">
                <strong>Emma Visser</strong>
                <span>07-04-2026 · 14:30 - 15:30</span>
              </div>
            </div>
          </MobileFrame>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Desktop frame</h2>

          <DesktopFrame title="LVS - Les toevoegen">
            <div className="mock-form">
              <label>
                Leerling
                <input type="text" placeholder="Naam leerling" />
              </label>

              <label>
                Vak
                <select>
                  <option>Wiskunde B</option>
                  <option>Biologie</option>
                  <option>Rekenen</option>
                </select>
              </label>

              <label>
                Waar
                <select>
                  <option>Online</option>
                  <option>Aan huis</option>
                </select>
              </label>

              <label>
                Wanneer
                <input type="text" placeholder="12-06-2024" />
              </label>

              <button className="mock-primary-button">Les toevoegen</button>
            </div>
          </DesktopFrame>
        </section>

        <FooterNav
          prevTo="/"
          nextTo="/taken"
          prevLabel="Terug"
          nextLabel="Verder"
        />
      </div>
    </main>
  );
}