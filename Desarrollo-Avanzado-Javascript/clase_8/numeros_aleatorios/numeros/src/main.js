import './style.css';

const MAX_INTENTOS = 10;
const RECORD_KEY = 'adivina-numero-record';

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const intentosEl = document.getElementById('intentos');
const restantesEl = document.getElementById('restantes');
const recordEl = document.getElementById('record');
const historialEl = document.getElementById('historial');

let numeroSecreto;
let intentos;
let terminado;

function generarNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

function pistaCercania(diff) {
  if (diff <= 3) return '🔥 ¡Hirviendo!';
  if (diff <= 7) return '♨️ Muy caliente';
  if (diff <= 15) return '🌤️ Caliente';
  if (diff <= 25) return '❄️ Frío';
  return '🧊 Muy frío';
}

function mostrarMensaje(texto, tipo = '') {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`.trim();
}

function actualizarRecord() {
  const record = localStorage.getItem(RECORD_KEY);
  recordEl.textContent = record ? `${record} intentos` : '—';
}

function guardarRecord(intentosUsados) {
  const actual = parseInt(localStorage.getItem(RECORD_KEY), 10);
  if (isNaN(actual) || intentosUsados < actual) {
    localStorage.setItem(RECORD_KEY, String(intentosUsados));
    actualizarRecord();
    return true;
  }
  return false;
}

function agregarHistorial(numero, resultado) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="num">${numero}</span> <span class="res">${resultado}</span>`;
  historialEl.prepend(li);
}

function bloquearJuego() {
  terminado = true;
  inputNumero.disabled = true;
  botonAdivinar.disabled = true;
}

function reiniciar() {
  numeroSecreto = generarNumero();
  intentos = 0;
  terminado = false;
  inputNumero.disabled = false;
  botonAdivinar.disabled = false;
  inputNumero.value = '';
  intentosEl.textContent = '0';
  restantesEl.textContent = String(MAX_INTENTOS);
  historialEl.innerHTML = '';
  mostrarMensaje('¡Nueva partida lista! Ingresa tu primera adivinanza.', 'info');
  inputNumero.focus();
}

function adivinar() {
  if (terminado) return;

  const numeroJugador = parseInt(inputNumero.value, 10);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mostrarMensaje('Por favor, ingresa un número válido entre 1 y 100.', 'error');
    return;
  }

  intentos++;
  intentosEl.textContent = String(intentos);
  restantesEl.textContent = String(MAX_INTENTOS - intentos);

  if (numeroJugador === numeroSecreto) {
    mostrarMensaje(
      `🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s).`,
      'win'
    );
    agregarHistorial(numeroJugador, '✅ ¡Correcto!');
    const esNuevoRecord = guardarRecord(intentos);
    if (esNuevoRecord) {
      mostrarMensaje(
        `🏆 ¡NUEVO RÉCORD! Adivinaste el número ${numeroSecreto} en solo ${intentos} intento(s).`,
        'win'
      );
    }
    bloquearJuego();
    return;
  }

  const diff = Math.abs(numeroSecreto - numeroJugador);
  const direccion = numeroJugador < numeroSecreto ? '⬆️ más alto' : '⬇️ más bajo';
  const cercania = pistaCercania(diff);

  agregarHistorial(numeroJugador, `${direccion} · ${cercania}`);

  if (intentos >= MAX_INTENTOS) {
    mostrarMensaje(
      `💀 ¡Perdiste! Se acabaron los intentos. El número era ${numeroSecreto}.`,
      'lose'
    );
    bloquearJuego();
    return;
  }

  mostrarMensaje(
    `El número es ${direccion}. ${cercania} (te quedan ${MAX_INTENTOS - intentos} intentos)`,
    numeroJugador < numeroSecreto ? 'low' : 'high'
  );
  inputNumero.select();
}

botonAdivinar.addEventListener('click', adivinar);
botonReiniciar.addEventListener('click', reiniciar);
inputNumero.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') adivinar();
});

actualizarRecord();
reiniciar();
