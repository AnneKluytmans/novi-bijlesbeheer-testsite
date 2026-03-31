import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="title">Welkom bij deze contextuele observatie 👋</h1>

      <p>
        Voor deze observatie ga je in de rol van <b>bijlesdocent</b> een aantal <b>taken uitvoeren</b> rondom 
        het beheren van bijlessen.
      </p>

      <p>
        Deze site bevat per taak een beschrijving en een eenvoudige simulatie van de huidige situatie.
        Het is de bedoeling dat je kijkt hoe <b>jij</b> deze taken uitvoert.
      </p>

      <div className="section">
        <h3>Wat ga je doen?</h3>

        <p>
            Per taak mag je eerst even alle informatie en de stappen zelfstandig doornemen en noteer hierbij:
        </p>

        <ul>
          <li>Je aanpak (welke stappen neem je)</li>
          <li>Je keuzes</li>
          <li>Waar je tegenaan loopt</li>
          <li>Wat goed werkt</li>
          <li>Wat niet goed werkt of inefficiënt is</li>
          <li>Mis je nog iets of heb je opmerkingen?</li>
        </ul>
      
        <p>
          Daarna lopen we de taak samen door en neem je me hardop mee in wat je doet.
        </p>
      </div>

      <div className="section important">
        <h3>Belangrijk</h3>
        <ul>
          <li>Er zijn geen goede of foute antwoorden</li>
          <li>Voer de taken uit op jouw manier</li>
          <li>Probeer je in te beelden dat je de taak echt uitvoert</li>
        </ul>
      </div>

      <button 
        className="primary-button"
        onClick={() => navigate("/tasks")}
      >
        Start
      </button>
    </div>
  );
}