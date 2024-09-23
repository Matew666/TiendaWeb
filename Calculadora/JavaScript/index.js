const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const displayValorRedondeo = document.getElementById('valor-redondeo');
const limpiar = document.getElementById('limpiar');

const display = new Display(displayValorAnterior, displayValorActual, displayValorRedondeo);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value))
});



