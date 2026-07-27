/* TMT bar weight calculator.
   Standard convention for IS 1786 reinforcement bars: a bar of diameter d (mm)
   weighs d^2 / 162 kilograms per metre. Everything below is that one formula. */
(function () {
  'use strict';

  var kgPerMetre = function (d) { return (d * d) / 162; };

  var fmt = function (n, dp) {
    if (!isFinite(n)) return '—';
    return n.toLocaleString('en-IN', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  };

  var num = function (el) {
    var v = parseFloat(el && el.value);
    return isFinite(v) && v > 0 ? v : 0;
  };

  var $ = function (id) { return document.getElementById(id); };

  /* ---- pieces -> weight ---- */
  var dia = $('dia'), len = $('len'), pcs = $('pcs');
  var outPerM = $('outPerM'), outPiece = $('outPiece'), outTotal = $('outTotal');

  function forward() {
    var perM = kgPerMetre(parseFloat(dia.value));
    var l = num(len), p = num(pcs);
    var perPiece = perM * l;
    var total = perPiece * p;

    outPerM.textContent = fmt(perM, 3) + ' kg';
    outPiece.textContent = l ? fmt(perPiece, 2) + ' kg' : '—';

    if (!l || !p) { outTotal.textContent = '—'; return; }
    outTotal.textContent = total >= 1000
      ? fmt(total / 1000, 3) + ' t  (' + fmt(total, 0) + ' kg)'
      : fmt(total, 1) + ' kg';
  }

  /* ---- weight -> pieces ---- */
  var rDia = $('rDia'), rLen = $('rLen'), rTon = $('rTon');
  var rOutPiece = $('rOutPiece'), rOutKg = $('rOutKg'), rOutPcs = $('rOutPcs');

  function reverse() {
    var perM = kgPerMetre(parseFloat(rDia.value));
    var l = num(rLen), t = num(rTon);
    var perPiece = perM * l;
    var totalKg = t * 1000;

    rOutPiece.textContent = l ? fmt(perPiece, 2) + ' kg' : '—';
    rOutKg.textContent = t ? fmt(totalKg, 0) + ' kg' : '—';

    if (!l || !t) { rOutPcs.textContent = '—'; return; }
    /* Round DOWN so the order lands just under the tonnage rather than over it. */
    rOutPcs.textContent = Math.floor(totalKg / perPiece).toLocaleString('en-IN') + ' pieces';
  }

  function bind(els, fn) {
    els.forEach(function (el) {
      if (!el) return;
      el.addEventListener('input', fn);
      el.addEventListener('change', fn);
    });
  }

  if (dia && len && pcs) { bind([dia, len, pcs], forward); forward(); }
  if (rDia && rLen && rTon) { bind([rDia, rLen, rTon], reverse); reverse(); }
})();
