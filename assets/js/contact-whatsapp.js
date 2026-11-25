(function () {
  'use strict';

  var form = document.getElementById('contact-whatsapp');
  if (!form) return;

  // Native required, email and minimum-length validation runs before submit.
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var fields = new FormData(form);
    function value(name) {
      return String(fields.get(name) || '').trim();
    }
    var message = [
      'Contato pelo site Plano H',
      '',
      'Nome: ' + value('nome'),
      'Assunto/Contato/Orçamento: ' + value('titulo'),
      'E-mail: ' + value('email'),
      'Telefone: ' + value('numero'),
      '',
      'Sua mensagem:',
      value('mensagem')
    ].join('\n');

    // Open the prepared conversation; the visitor confirms sending in WhatsApp.
    window.location.assign('https://wa.me/5511940703376?text=' + encodeURIComponent(message));
  });
})();
