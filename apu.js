/* Yhteiset apufunktiot sivuille. Tätä tiedostoa ei tarvitse muokata. */

function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}

function haeKategoria(id) {
  for (var i = 0; i < KATEGORIAT.length; i++) {
    if (KATEGORIAT[i].id === id) return KATEGORIAT[i];
  }
  return null;
}

function kategorianTuotteet(id) {
  return TUOTTEET.filter(function (t) {
    return (t.kategoriat || []).indexOf(id) !== -1;
  });
}

/* Tuotekortti (etusivu ja kategoriasivu) */
function luoTuotekortti(t) {
  var a = el('a', 'product-card');
  a.href = 'tuote.html?id=' + encodeURIComponent(t.id);

  var thumb = el('div', 'product-thumb');
  if (t.kuvat && t.kuvat.length) {
    var img = document.createElement('img');
    img.src = t.kuvat[0];
    img.alt = t.nimi;
    thumb.appendChild(img);
  }
  a.appendChild(thumb);

  var body = el('div', 'product-body');
  body.appendChild(el('h4', null, t.nimi));
  body.appendChild(el('div', 'product-meta', t.lyhyt || ''));
  var row = el('div', 'product-price');
  row.appendChild(el('span', 'price', t.hinta ? t.hinta : 'Kysy hintaa'));
  var more = el('span', 'mini-link');
  more.innerHTML = 'Katso &rarr;';
  row.appendChild(more);
  body.appendChild(row);
  a.appendChild(body);
  return a;
}

/* Kategoriakortti (etusivu) */
function luoKategoriakortti(k) {
  var a = el('a', 'cat-card');
  a.href = k.linkki ? k.linkki : 'kategoria.html?id=' + encodeURIComponent(k.id);

  if (k.kuva) {
    var thumb = el('div', 'cat-thumb');
    var img = document.createElement('img');
    img.src = k.kuva;
    img.alt = k.nimi;
    thumb.appendChild(img);
    a.appendChild(thumb);
  }

  var body = el('div', 'body');
  body.appendChild(el('div', 'num', k.numero || ''));
  body.appendChild(el('h3', null, k.nimi));
  body.appendChild(el('p', null, k.lyhyt || ''));
  a.appendChild(body);
  return a;
}
