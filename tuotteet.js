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

   - kategoriat: mihin kategorioihin tuote kuuluu (katso KATEGORIAT alempana).
              Tuote voi kuulua useampaan, esim. ["jarrut", "etukeulat"].

   UUSI TUOTE: kopioi yksi { ... } -lohko pilkkuineen, vaihda id (ei välilyöntejä
   eikä ääkkösiä) ja muut tiedot. Tuotteet näkyvät sivulla tässä järjestyksessä.
   Muista pilkku jokaisen lohkon } jälkeen (paitsi viimeisen).
   ========================================================== */

var TUOTTEET = [
  {
    id: "etukeula",
    kategoriat: ["etukeulat", "jarrut"],
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
    kategoriat: ["pakoputket"],
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
    kategoriat: ["etukeulat"],
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
    kategoriat: ["muovit"],
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
    kategoriat: ["pienosat"],
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
    kategoriat: ["pienosat"],
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
    kategoriat: ["moottorit"],
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


/* ==========================================================
   KATEGORIAT
   Jokainen kategoria saa oman sivunsa (kategoria.html?id=...), jossa
   näkyvät kaikki siihen kuuluvat tuotteet.
   - id:      sama teksti, jota käytät tuotteen kategoriat-listassa
   - kuva:    kategoriakortin kuva (voi olla tyhjä "")
   - linkki:  jos täytetty, kortti vie tähän osoitteeseen eikä omalle sivulleen
   ========================================================== */

var KATEGORIAT = [
  {
    id: "etukeulat",
    numero: "01",
    nimi: "Etukeulat & jousitus",
    lyhyt: "Keulaputket, iskarit, laakerit",
    kuvaus: "Etukeulat, takaiskarit, laakerit ja muut jousitukseen kuuluvat osat.",
    kuva: "kuvat/etukeula-osat.jpg"
  },
  {
    id: "jarrut",
    numero: "02",
    nimi: "Jarrut",
    lyhyt: "Levyjarrut, palat, letkut",
    kuvaus: "Levyjarrut, jarrupalat, jarrukahvat ja letkut.",
    kuva: "kuvat/jarrukahva-palat.jpg"
  },
  {
    id: "moottorit",
    numero: "03",
    nimi: "Moottorit & osat",
    lyhyt: "Sylinterit, männät, kytkimet",
    kuvaus: "Kokonaiset moottorit sekä sylinterit, männät, kytkimet ja muut moottorin osat.",
    kuva: "kuvat/moottori.jpg"
  },
  {
    id: "pakoputket",
    numero: "04",
    nimi: "Pakoputket",
    lyhyt: "Täyssarjat ja äänenvaimentimet",
    kuvaus: "Pakoputkien täyssarjat ja äänenvaimentimet.",
    kuva: "kuvat/pakoputket.jpg"
  },
  {
    id: "muovit",
    numero: "05",
    nimi: "Muovit & korit",
    lyhyt: "Tankit, lokasuojat, istuimet",
    kuvaus: "Tankit, lokasuojat, istuimet ja muut korin osat.",
    kuva: "kuvat/lokasuojat.jpg"
  },
  {
    id: "renkaat",
    numero: "06",
    nimi: "Renkaat & vanteet",
    lyhyt: "Komplettipyörät ja yksittäiset",
    kuvaus: "Komplettipyörät sekä yksittäiset renkaat ja vanteet.",
    kuva: "kuvat/etunapa-pyora.jpg"
  },
  {
    id: "pienosat",
    numero: "07",
    nimi: "Pienosat & tarvikkeet",
    lyhyt: "Ruuvit, kaapelit, pikkutarvikkeet",
    kuvaus: "Valot, mittaristot, jalkatapit, kahvat, kaapelit ja muut pienosat.",
    kuva: "kuvat/kahvat-kytkimet.jpg"
  },
  {
    id: "kaytetyt",
    numero: "08",
    nimi: "Käytetyt osat",
    lyhyt: "Puretuista mopoista",
    kuvaus: "",
    kuva: "",
    linkki: "index.html#kaytetyt"
  }
];
