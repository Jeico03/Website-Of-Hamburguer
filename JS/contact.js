 document.querySelector('.section-contact__form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const data = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: data,
      mode: 'no-cors'
    })
    .then(() => {
      // Mensaje de éxito
      form.reset();
      alert('¡Gracias! Tu mensaje ha sido enviado.');
    })
    .catch(error => {
      // Mensaje de error
      console.error('Error:', error);
      alert('Algo salió mal. Por favor intenta de nuevo.');
    });
  });