const form = document.getElementById('registroEvento');
const mensajeExito = document.getElementById('mensaje-exito');

function mostrarError(idCampo, mensaje) {
  const span = document.getElementById(`error-${idCampo}`);
  const input = document.getElementById(idCampo);
  if (span) span.textContent = mensaje;
  if (input) input.classList.toggle('error-input', !!mensaje);
}

function limpiarErrores() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));
}

function validarNombre(nombre) {
  if (!nombre.trim()) return 'El nombre es obligatorio.';
  if (nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim())) return 'El nombre solo puede contener letras y espacios.';
  return '';
}

function validarCorreo(correo) {
  if (!correo.trim()) return 'El correo electrónico es obligatorio.';
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo.trim())) return 'Ingresa un correo electrónico válido (ej: usuario@dominio.com).';
  return '';
}

function validarTelefono(telefono) {
  if (!telefono.trim()) return 'El teléfono es obligatorio.';
  const soloDigitos = telefono.replace(/\D/g, '');
  if (soloDigitos.length !== 10) return 'El teléfono debe tener exactamente 10 dígitos.';
  return '';
}

function validarIntereses() {
  const seleccionados = document.querySelectorAll('input[name="intereses"]:checked');
  if (seleccionados.length === 0) return 'Selecciona al menos un interés.';
  return '';
}

function validarHorario() {
  const seleccionado = document.querySelector('input[name="horario"]:checked');
  if (!seleccionado) return 'Selecciona un horario preferido.';
  return '';
}

function validarFecha(fecha) {
  if (!fecha) return 'Selecciona una fecha para el evento.';
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const fechaEvento = new Date(fecha + 'T00:00:00');
  if (fechaEvento < hoy) return 'La fecha del evento no puede ser anterior a hoy.';
  return '';
}

function validarArchivo() {
  const archivo = document.getElementById('archivo');
  if (archivo.files.length === 0) return '';
  const arch = archivo.files[0];
  const maxSize = 5 * 1024 * 1024;
  if (arch.size > maxSize) return 'El archivo no debe superar los 5 MB.';
  return '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  limpiarErrores();
  mensajeExito.classList.add('oculto');

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;

  const errores = [
    { id: 'nombre',   msg: validarNombre(nombre) },
    { id: 'correo',   msg: validarCorreo(correo) },
    { id: 'telefono', msg: validarTelefono(telefono) },
    { id: 'intereses', msg: validarIntereses() },
    { id: 'horario',  msg: validarHorario() },
    { id: 'fecha',    msg: validarFecha(fecha) },
    { id: 'archivo',  msg: validarArchivo() },
  ];

  let hayError = false;
  errores.forEach(({ id, msg }) => {
    if (msg) {
      mostrarError(id, msg);
      hayError = true;
    }
  });

  if (!hayError) {
    mensajeExito.classList.remove('oculto');
    form.reset();
  }
});
