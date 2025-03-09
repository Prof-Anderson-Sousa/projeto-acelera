document.addEventListener('DOMContentLoaded', function () {
  const whatsappInput = document.getElementById('whatsapp');

  // Máscara de telefone no formato brasileiro (99) 99999-9999
  whatsappInput.addEventListener('input', function (event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
      if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
      const formattedValue = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      event.target.value = formattedValue;
  });
});
