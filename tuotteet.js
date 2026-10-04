/* ==========================================================
   APINAPAJA — TUOTTEET
   Tämä on ainoa tiedosto, jota tarvitset hintojen, kuvien ja
   tuotetietojen muokkaamiseen. Etusivun kortit ja jokaisen
   tuotteen oma alasivu (tuote.html) rakentuvat tästä.

   MITEN MUOKKAAT
   - hinta:   kirjoita esim. "89 €". Jos jätät tyhjäksi "", sivulla lukee "Kysy hintaa".
   - kuvat:   lisää kuvatiedostot kuvat-kansioon ja kirjoita polut listaan.
              Ensimmäinen kuva näkyy etusivun kortissa ja tuotesivun pääkuvana.
              Useampi kuva = tuotesivulle tulee pikkukuvat, joita klikkaamalla vaihtaa kuvaa.
   - kuvaus:  vapaa teksti tuotesivulle. Uusi rivi = \n
   - tiedot:  lista pareista [otsikko, arvo], näkyy tuotesivulla taulukkona.
   - tila:    esim. "Varastossa", "Tilattavissa" tai "Myyty". Tyhjä = ei näytetä.

   UUSI TUOTE: kopioi yksi { ... } -lohko pilkkuineen, vaihda id (ei välilyöntejä
   eikä ääkkösiä) ja muut tiedot. Tuotteet näkyvät sivulla tässä järjestyksessä.
   Muista pilkku jokaisen lohkon } jälkeen (paitsi viimeisen).
   ========================================================== */

var TUOTTEET = [
  {
    id: "etukeula",
    nimi: "Etukeula 550mm, levyjarrulla",
    lyhyt: "Skyteam / Honda Monkey -yhteensopiva",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/etukeula-osat.jpg"],
    kuvaus: "",
    tiedot: [
      ["Yhteensopivuus", "Skyteam / Honda Monkey"],
      ["Pituus", "550 mm"],
      ["Jarru", "Levyjarru"]
    ]
  },
  {
    id: "pakoputkisarja",
    nimi: "Pakoputkisarja, täyssarja",
    lyhyt: "Kloonimoottoreihin, universaali kiinnitys",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/pakoputket.jpg"],
    kuvaus: "",
    tiedot: [
      ["Sopii", "Kloonimoottoreihin"],
      ["Kiinnitys", "Universaali"]
    ]
  },
  {
    id: "takaiskarit",
    nimi: "Takaiskarisarja, siniset jouset",
    lyhyt: "Heiluri ja iskarit pakettina",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/takaiskarit.jpg"],
    kuvaus: "",
    tiedot: [
      ["Sisältö", "Heiluri ja iskarit pakettina"],
      ["Jouset", "Siniset"]
    ]
  },
  {
    id: "istuinsarja",
    nimi: "Istuinsarja, etu ja taka",
    lyhyt: "Honda-tyylinen, mustaa nahkaimitaatiota",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/istuinsarja.jpg"],
    kuvaus: "",
    tiedot: [
      ["Tyyli", "Honda-tyylinen"],
      ["Materiaali", "Musta nahkaimitaatio"],
      ["Sisältö", "Etu- ja takaistuin"]
    ]
  },
  {
    id: "jalkatapit-sivutuki",
    nimi: "Jalkatapit + sivutuki",
    lyhyt: "Säädettävät jalkatapit, pari",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/jalkatapit-sivutuki.jpg"],
    kuvaus: "",
    tiedot: [
      ["Jalkatapit", "Säädettävät, pari"],
      ["Sisältö", "Jalkatapit + sivutuki"]
    ]
  },
  {
    id: "ajovalosarja-mittaristo",
    nimi: "Ajovalosarja + mittaristo",
    lyhyt: "Kromikupu, polttimo ja nopeusmittari",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/ajovalo-mittaristo.jpg"],
    kuvaus: "",
    tiedot: [
      ["Sisältö", "Ajovalo, kromikupu, polttimo ja nopeusmittari"]
    ]
  },
  {
    id: "moottori",
    nimi: "Täydellinen moottori",
    lyhyt: "Kloonimoottori, asennusvalmis",
    hinta: "",
    tila: "",
    kuvat: ["kuvat/moottori.jpg"],
    kuvaus: "",
    tiedot: [
      ["Tyyppi", "Kloonimoottori"],
      ["Kunto", "Asennusvalmis"]
    ]
  }
];
