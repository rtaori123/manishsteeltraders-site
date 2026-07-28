/* Enquiry form -> WhatsApp.
   No server, no form service. Reads the fields, builds a readable message and
   opens wa.me with it pre-filled, so the enquiry lands on the owner's phone
   already structured instead of as "hi need steel". */
(function () {
  'use strict';

  var PHONE = '919822221699';
  var form = document.getElementById('enquiryForm');
  if (!form) return;

  var note = document.getElementById('qNote');

  var val = function (id) {
    var el = document.getElementById(id);
    return el ? String(el.value || '').trim() : '';
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = val('qName');

    if (!name) {
      if (note) {
        note.textContent = 'Please add your name so we know who we are quoting for.';
        note.style.color = '#b3261e';
      }
      var n = document.getElementById('qName');
      if (n) n.focus();
      return;
    }

    var lines = [
      'Hi Manish Steel Traders,',
      '',
      'I would like a quote.',
      '',
      'Name: ' + name,
      'I am a: ' + val('qWho'),
      'Requirement: ' + val('qProduct')
    ];

    /* Only include the optional rows the person actually filled in — an enquiry
       full of blank labels reads worse than a short one. */
    var optional = [
      ['Size & grade', val('qSpec')],
      ['Quantity', val('qQty')],
      ['Delivery location', val('qWhere')],
      ['Notes', val('qMsg')]
    ];
    optional.forEach(function (row) {
      if (row[1]) lines.push(row[0] + ': ' + row[1]);
    });

    var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');

    if (note) {
      note.textContent = 'WhatsApp should have opened with your enquiry ready to send. If it did not, call +91 98222 21699.';
      note.style.color = '';
    }
  });
})();
