function cambiarHojaEstilo() {
  var hojaEstilo1 = document.getElementById('estilo');
  var hojaEstilo2 = document.getElementById('estilo2');

  if (hojaEstilo1.disabled) {
    hojaEstilo1.disabled = false;
    hojaEstilo2.disabled = true;
  } else {
    hojaEstilo1.disabled = true;
    hojaEstilo2.disabled = false;
  }
}
// Función para validar el formulario y mostrar una notificación con el nombre ingresado
function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var name = nameInput.value;
  var email = emailInput.value;

  if (name === '' || email === '') {
    alert('Por favor complete todos los campos.');
    return false;
  } else {
    alert('¡Hola ' + name + '! Gracias por contactarnos.');
    nameInput.value = '';
    emailInput.value = '';
    return true;
  }
}
// Evento para validar el formulario
var form = document.getElementById('contact-form');
form.addEventListener('submit', validateForm);
//cambiar fuente
const changeFontButton = document.getElementById('change-font-button');
let fontChanged = false;

changeFontButton.addEventListener('click', () => {
  const elements = document.querySelectorAll('*');

  if (!fontChanged) {
    elements.forEach((element) => {
      element.style.fontFamily = 'Verdana, sans-serif';
    });

    fontChanged = true;
  } else {
    elements.forEach((element) => {
      element.style.fontFamily = '';
    });

    fontChanged = false;
  }
});
