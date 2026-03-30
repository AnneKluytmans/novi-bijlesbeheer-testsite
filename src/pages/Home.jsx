import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welkom bij deze contextuele observatie 👋</h1>

      <p>
        Voor deze observatie ga je in de rol van <b>bijlesdocent</b> een aantal <b>taken uitvoeren</b> rondom 
        het beheren van bijlessen. 
      </p>

      <p>
        Deze site bevat voor alle taken een beschrijving en eenvoudige simulatie van de huidige situatie.
        Het is de bedoeling dat je per taak gaat kijken, hoe <b>jij</b> deze taak zou uitvoeren binnen de mogelijkheden
        van de huidige situatie. Gebruik hierbij je eerdere ervaring als bijlesdocent.
      </p>

      <p>
        Per taak mag je eerst even alle informatie en de stappen zelfstandig doornemen en noteer hierbij:
      </p>

      <ul>
        <li>Je aanpak (welke stappen neem je)</li>
        <li>Je keuzes</li>
        <li>Waar je tegenaan loopt</li>
        <li>Wat goed werkt</li>
        <li>Wat niet goed werkt of inefficiënt is</li>
        <li>Mis je nog iets of heb je nog overige opmerkingen?</li>
      </ul>

      <p> 
        Daarna gaan we samen door de taak heen en mag je me hardop meenemen in wat je doet.
        Hierbij zal ik vragen stellen.
      </p>

      <p> 
        Belangrijk:
      </p>
      <ul>
        <li>Er zijn geen goede of foute antwoorden</li>
        <li>Voer de taken uit op jouw manier</li>
      </ul>

      <button onClick={() => navigate("/taken")}>
        Start
      </button>
    </div>
  );
}
