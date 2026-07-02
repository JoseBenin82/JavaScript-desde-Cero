const mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Mesas disponibles: ${mesasDisponibles}. Reserva confirmada para ${mesasSolicitadas} mesa(s).`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solicitaste ${mesasSolicitadas}, pero solo hay ${mesasDisponibles}.`);
      }
    }, 2000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() >= 0.3;
      if (exito) {
        resolve(`Correo de confirmación enviado exitosamente a ${nombreCliente}.`);
      } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}. Intenta de nuevo.`);
      }
    }, 1500);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Enviando correo de confirmación...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
  } catch (error) {
    console.log("Error:", error);
  }
}

console.log("=== Prueba 1: Reserva válida (3 mesas) ===");
hacerReserva("Juan Pérez", 3);

setTimeout(() => {
  console.log("\n=== Prueba 2: Reserva inválida (7 mesas) ===");
  hacerReserva("María García", 7);
}, 5000);

setTimeout(() => {
  console.log("\n=== Prueba 3: Reserva exacta (5 mesas) ===");
  hacerReserva("Carlos López", 5);
}, 10000);
