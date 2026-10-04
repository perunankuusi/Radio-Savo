# Apinapaja

Varaosasivusto Honda Monkeylle ja Skyteam-kopioille.

## Tiedostot

| Tiedosto | Mitä se on |
|---|---|
| `index.html` | Etusivu |
| `tuote.html` | Tuotesivun pohja (yksi pohja kaikille tuotteille, ei tarvitse muokata) |
| `kategoria.html` | Kategoriasivun pohja (ei tarvitse muokata) |
| `tuotteet.js` | **Tuotteiden ja kategorioiden tiedot, hinnat ja kuvat. Muokkaa tätä.** |
| `apu.js` | Yhteiset toiminnot (ei tarvitse muokata) |
| `tyyli.css` | Sivun ulkoasu |
| `kuvat/` | Kaikki kuvat |

## Hinnan lisääminen

Avaa `tuotteet.js`, etsi tuote ja kirjoita hinta:

```js
hinta: "89 €",
```

Tyhjä `""` tarkoittaa, että sivulla lukee "Kysy hintaa".

## Kuvien lisääminen

1. Lisää kuvatiedosto `kuvat`-kansioon (esim. `kuvat/etukeula-2.jpg`).
2. Lisää sen polku tuotteen `kuvat`-listaan:

```js
kuvat: ["kuvat/etukeula-osat.jpg", "kuvat/etukeula-2.jpg"],
```

Ensimmäinen kuva näkyy etusivun kortissa. Jos kuvia on useita, tuotesivulle tulee pikkukuvat.

## Uusi tuote

Kopioi yksi `{ ... }`-lohko `tuotteet.js`:ssä, vaihda `id` (ei välilyöntejä eikä ääkkösiä) ja täytä tiedot. Tuote tulee etusivulle ja saa oman sivun osoitteeseen `tuote.html?id=<id>`.

## Kategoriat

Jokainen etusivun kategoriakortti avaa oman sivun (`kategoria.html?id=<id>`), jossa näkyvät kaikki siihen kuuluvat tuotteet. Kategoriat on listattu `tuotteet.js`:n lopussa (`KATEGORIAT`).

Tuote liitetään kategoriaan tuotteen `kategoriat`-listassa. Tuote voi kuulua useampaan:

```js
kategoriat: ["etukeulat", "jarrut"],
```

Kategoria, jossa ei ole vielä tuotteita, näyttää tekstin "Osia tulossa" ja napin osan kysymiseen.
