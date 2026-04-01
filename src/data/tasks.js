export const tasks = [
// 📅 1. LES AFSPREKEN
  {
    id: "plannen",
    title: "Les afspreken",
    steps: [
    {
      type: "intro",
      content: "Je hebt een bijles gegeven en moet een nieuwe afspraak maken."
    },
    {
      type: "simulation",
      component: "PlanLessonSim"
    },
    {
        type: "choices",
        question: "Hoe spreek je een nieuwe bijles af?",
        options: [
          "Mondeling tijdens de les",
          "Na de les met de leerling",
          "Na de les met de ouder",
          "Elke week een vast moment",
          "Wisselend per leerling",
          "Anders, namelijk..."
        ]
      },
      {
        type: "reflection",
        question: "Vindt je dat dit goed werkt?"
      }
    ]
  },
 //📱 2. LES DOORGEVEN
  {
    id: "doorgeven",
    title: "Les doorgeven aan administratie",
    steps: [
      {
        type: "intro",
        content: "Je hebt een les afgesproken en moet deze doorgeven aan de administratie."
      },
      {
        type: "simulation",
        component: "WhatsAppSim"
      },
      {
        type: "choices",
        question: "Hoe geef je de les door?",
        options: [
          "Via WhatsApp",
          "Via email"
        ]
      },
      {
        type: "choices",
        question: "Wanneer doe je dit?",
        options: [
          "Direct na de les",
          "Later op de dag",
          "Alles in één keer per week",
          "Wisselend"
        ]
      },
      {
        type: "reflection",
        question: "Wat zet je in dit bericht naar de administratie?"
      }
    ]
  },

  // ✅ 3. Lesoverzicht en urenregistratie in de medewerkersapp
  {
    id: "app",
    title: "Lesoverzicht en urenregistratie in de medewerkersapp",
    steps: [
      {
        type: "intro",
        content: "De les is ingepland en staat in de medewerkers-app (alleen mobiel)."
      },
      {
        type: "simulation",
        component: "MobileAppSim"
      },
      {
        type: "choices",
        question: "Hoe controleer je je uren aan het einde van de maand?",
        options: [
          "Ik heb een lijstje in word/notities",
          "Mijn agenda",
          "Via de appjes richting de administratie",
          "Via de lessen in het lvs",
          "Ik ga ervan uit dat het klopt",
          "Anders, namelijk..."
        ]
      },
      {
        type: "reflection",
        question: "Wat vind je onhandig aan deze manier van werken?"
      }
    ]
  },

  // 🖊️ 4. Les wijzigen of verwijderen
  {
    id: "wijzigen",
    title: "Les wijzigen of verwijderen",
    steps: [
      {
        type: "intro",
        content: "Je wil een les wijzigen of verwijderen."
      },
      {
        type: "simulation",
        component: "MobileAppSim"
      },
      {
        type: "choices",
        question: "Je wilt een les wijzigen. Wat doe je?",
        options: [
          "Ik stuur een WhatsApp naar administratie",
          "Ik stuur een email",
          "Ik doe niets",
          "Ik wacht tot later"
        ]
      },
      {
        type: "choices",
        question: "Wanneer geef je wijzigingen door?",
        options: [
          "Altijd",
          "Alleen bij grote wijzigingen",
          "Alleen als de les vervalt",
          "Wisselend"
        ]
      },
      {
        type: "reflection",
        question: "Wat vind je onhandig aan deze manier van werken?"
      }
    ]
  },

  // 🔔 5. LES GEVEN + HERINNERING
  {
    id: "les-geven",
    title: "Les geven & herinneringen",
    steps: [
      {
        type: "intro",
        content: "Je gaat een les geven. Soms vergeten leerlingen de afspraak."
      },
      {
        type: "choices",
        question: "Stuur jij een herinnering vooraf?",
        options: [
          "Ja, altijd",
          "Soms",
          "Nee"
        ]
      },
      {
        type: "choices",
        question: "Hoe stuur je een herinnering?",
        options: [
          "WhatsApp",
          "Email",
          "Ik doe het mondeling eerder",
          "Ik doe niets"
        ]
      },
      {
        type: "reflection",
        question: "Waarom doe je dit wel of niet?"
      }
    ]
  },

  // 💻 6. LVS
  {
    id: "lvs",
    title: "Les invoeren in LVS",
    steps: [
      {
        type: "intro",
        content: "Na de les moet je deze invoeren in het LVS (desktop)."
      },
      {
        type: "simulation",
        component: "LVSSim"
      },
      {
        type: "choices",
        question: "Wanneer voer je lessen in?",
        options: [
          "Direct na elke les",
          "Aan het einde van de dag",
          "Later in de week",
          "Wisselend"
        ]
      },
      {
        type: "choices",
        question: "Je bent het lesverslag vergeten. Wat doe je?",
        options: [
          "Ik vul het later alsnog in",
          "Ik mail administratie",
          "Ik stuur het handmatig",
          "Ik doe niets"
        ]
      },
      {
        type: "choices",
        question: "Les staat verkeerd in het systeem. Wat doe je?",
        options: [
          "Ik neem contact op met administratie",
          "Ik laat het zo",
          "Ik maak een nieuwe les aan",
          "Anders"
        ]
      },
      {
        type: "reflection",
        question: "Wat werkt hier niet goed voor jou?"
      }
    ]
  },
    // ❌ 7. Leerling afwezig melden
  {
    id: "afwezig",
    title: "Leerling afwezig melden",
    steps: [
      {
        type: "intro",
        content: "Meld een leerling afwezig in het lvs"
      },
      {
        type: "simulation",
        component: "LVSSim"
      },
      {
        type: "choices",
        question: "Wanneer meld je de leerling afwezig?",
        options: [
          "Direct",
          "Aan het einde van de dag",
          "Later in de week",
          "Wisselend"
        ]
      },
      {
        type: "reflection",
        question: "Wat werkt hier niet goed voor jou?"
      }
    ]
  }
];