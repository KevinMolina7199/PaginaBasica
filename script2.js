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
// Cambiar fuente
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
