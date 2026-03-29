import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welkom bij deze contextuele observatie</h1>

      <p>
        Voor deze observatie ga je in de rol van <b>bijlesdocent</b> een aantal <b>taken uitvoeren</b> rondom 
        het beheren van bijlessen. 
        Op deze site vindt je per taak een beschrijving en eenvoudige simulatie van de huidige situatie.
        Het is de bedoeling dat je per taak gaat kijken, hoe <b>jij</b> deze taak zou uitvoeren gezien de huidige situatie
        en wat voor jou goed werkt en wat juist niet: zijn er inefficiënties, waar loop je tegenaan, wat mis je, wat werkt juist goed? 
        Je mag eerst alle taken zelfstandig doornemen en alvast je stappen, aanpak en bevindingen noteren. 
        Daarna gaan we samen door alle taken heen en mag je me hardop meenemen in wat je doet, waarbij ik ondertussen vragen stel. 
      </p>

      <ul>
        <li>Er zijn geen goede of foute antwoorden</li>
        <li>Voer de taken uit op jouw manier</li>
        <li>Probeer je zo goed mogelijk in te leven in je rol als bijlesdocent</li>
      </ul>

      <button onClick={() => navigate("/taken")}>
        Start
      </button>
    </div>
  );
}
