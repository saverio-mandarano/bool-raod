const travels = [
  {
    "id": 1,
    "localita": "Kyoto, Giappone",
    "descrizione": "Tour culturale tra templi zen e foreste di bambù.",
    "tipo_viaggio": "Culturale",
    "data_inizio": "2026-04-10",
    "data_fine": "2026-04-24",
    "partecipanti": [
      {
        "id": 1,
        "nome": "Marco",
        "cognome": "Rossi",
        "data_nascita": "1985-05-12",
        "cf": "RSSMRC85E12F205H",
        "telefono": "+39 340 1234567",
        "mail": "marco.rossi@example.com"
      },
      {
        "id": 2,
        "nome": "Giulia",
        "cognome": "Bianchi",
        "data_nascita": "1990-09-22",
        "cf": "BNCGLI90P62L219Z",
        "telefono": "+39 333 9876543",
        "mail": "giulia.bianchi@example.com"
      }
    ]
  },
  {
    "id": 2,
    "localita": "Reykjavík, Islanda",
    "descrizione": "Spedizione fotografica a caccia dell'aurora boreale e ghiacciai.",
    "tipo_viaggio": "Avventura",
    "data_inizio": "2026-11-05",
    "data_fine": "2026-11-12",
    "partecipanti": [
      {
        "id": 3,
        "nome": "Luca",
        "cognome": "Verdi",
        "data_nascita": "1978-02-28",
        "cf": "VRDLCU78B28H501A",
        "telefono": "+39 328 1122334",
        "mail": "luca.verdi@adventure.it"
      }
    ]
  },
  {
    "id": 3,
    "localita": "Safari nel Parco Kruger, Sudafrica",
    "descrizione": "Avvistamento dei 'Big Five' con pernottamento in lodge ecosostenibili.",
    "tipo_viaggio": "Natura / Wildlife",
    "data_inizio": "2026-06-15",
    "data_fine": "2026-06-25",
    "partecipanti": [
      { "id": 4, "nome": "Alessandro", "cognome": "Ferrari", "data_nascita": "1982-11-30", "cf": "FRRLSN82S30H501U", "telefono": "+39 347 1122334", "mail": "a.ferrari@mail.it" },
      { "id": 5, "nome": "Elena", "cognome": "Rizzo", "data_nascita": "1985-04-14", "cf": "RZZLNE85D54F205T", "telefono": "+39 339 5566778", "mail": "elena.rizzo@web.com" },
      { "id": 6, "nome": "Matteo", "cognome": "Galli", "data_nascita": "1992-08-20", "cf": "GLLMTT92M20L219Y", "telefono": "+39 320 9988776", "mail": "matteo.g@service.it" }
    ]
  },
  {
    "id": 4,
    "localita": "New York City, USA",
    "descrizione": "Settimana tra i musei di Manhattan e le luci di Times Square.",
    "tipo_viaggio": "City Break",
    "data_inizio": "2026-09-10",
    "data_fine": "2026-09-17",
    "partecipanti": [
      { "id": 7, "nome": "Sofia", "cognome": "Conti", "data_nascita": "1998-12-05", "cf": "CNTSFO98T45H501X", "telefono": "+39 345 6677889", "mail": "sofia.conti@edu.it" },
      { "id": 8, "nome": "Davide", "cognome": "Mancini", "data_nascita": "1995-01-15", "cf": "MNCDVD95A15L219W", "telefono": "+39 331 4455667", "mail": "d.mancini@work.com" },
      { "id": 9, "nome": "Chiara", "cognome": "Lombardi", "data_nascita": "2000-06-25", "cf": "LMBCHR00H65F205P", "telefono": "+39 329 0011223", "mail": "chiara.l@mail.com" }
    ]
  },
  {
    "id": 5,
    "localita": "Patagonia, Argentina",
    "descrizione": "Trekking intensivo sul ghiacciaio Perito Moreno e torri del Paine.",
    "tipo_viaggio": "Trekking / Sport",
    "data_inizio": "2026-12-01",
    "data_fine": "2026-12-15",
    "partecipanti": [
      { "id": 10, "nome": "Roberto", "cognome": "Moretti", "data_nascita": "1975-03-10", "cf": "MRTRRT75C10L219V", "telefono": "+39 338 2233445", "mail": "rob.moretti@trek.it" },
      { "id": 11, "nome": "Paola", "cognome": "Barbieri", "data_nascita": "1979-10-22", "cf": "BRBPLA79R62F205K", "telefono": "+39 342 5566443", "mail": "p.barbieri@info.it" },
      { "id": 12, "nome": "Stefano", "cognome": "Fontana", "data_nascita": "1988-07-08", "cf": "FNTSFN88L08H501J", "telefono": "+39 333 7788990", "mail": "stefano.f@outdoors.it" }
    ]
  },
  {
    "id": 6,
    "localita": "Isole Cicladi, Grecia",
    "descrizione": "Crociera in barca a vela tra Santorini, Naxos e Mykonos.",
    "tipo_viaggio": "Relax / Mare",
    "data_inizio": "2026-07-20",
    "data_fine": "2026-07-30",
    "partecipanti": [
      { "id": 13, "nome": "Alice", "cognome": "Marini", "data_nascita": "1993-02-14", "cf": "MRNLCA93B54L219Q", "telefono": "+39 340 3344556", "mail": "alice.marini@sea.it" },
      { "id": 14, "nome": "Federico", "cognome": "Greco", "data_nascita": "1991-05-30", "cf": "GRCFRC91E30F205D", "telefono": "+39 327 6677001", "mail": "f.greco@sailing.com" },
      { "id": 15, "nome": "Martina", "cognome": "Serra", "data_nascita": "1994-11-11", "cf": "SRRMTN94S51H501S", "telefono": "+39 335 1122998", "mail": "m.serra@viaggi.it" }
    ]
  },
  {
    "id": 7,
    "localita": "Praga, Repubblica Ceca",
    "descrizione": "Mercatini di Natale e tour delle birrerie storiche.",
    "tipo_viaggio": "Enogastronomico",
    "data_inizio": "2026-12-10",
    "data_fine": "2026-12-14",
    "partecipanti": [
      { "id": 16, "nome": "Giorgio", "cognome": "Vitale", "data_nascita": "1980-09-01", "cf": "VTLGRG80P01L219E", "telefono": "+39 328 4455009", "mail": "g.vitale@food.it" },
      { "id": 17, "nome": "Sonia", "cognome": "Pellegrini", "data_nascita": "1983-01-25", "cf": "PLLSNO83A65F205R", "telefono": "+39 349 9900112", "mail": "sonia.p@mail.com" },
      { "id": 18, "nome": "Claudio", "cognome": "Villa", "data_nascita": "1972-04-18", "cf": "VLLCLD72D18H501B", "telefono": "+39 331 7766554", "mail": "c.villa@travel.it" }
    ]
  }
]

export default travels