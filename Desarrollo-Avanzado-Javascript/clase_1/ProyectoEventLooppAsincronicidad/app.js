
// Simulador de Pedidos - Cafetería
// Tema: Event Loop y Asincronicidad (setTimeout, Promises, async/await)


const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');
const emptyMessage = document.getElementById('emptyMessage');
const totalCountEl = document.getElementById('totalCount');
const pendingCountEl = document.getElementById('pendingCount');
const completedCountEl = document.getElementById('completedCount');

let orderId = 1;
let totalCount = 0;
let pendingCount = 0;
let completedCount = 0;

// ------------------------------------------------------------
// Evento principal: al hacer clic se genera un nuevo pedido.
// Cada pedido se agrega al DOM y se procesa de forma asíncrona,
// sin bloquear la interfaz gracias al Event Loop.
// ------------------------------------------------------------
addOrderBtn.addEventListener('click', () => {
  const order = { id: orderId++, status: 'En Proceso' };
  addOrder(order);
  processOrder(order);
});

// Agrega el pedido a la lista visual con estado inicial 'En Proceso'
function addOrder(order) {
  emptyMessage.classList.add('hidden');

  const listItem = document.createElement('li');
  listItem.id = `order-${order.id}`;
  listItem.className = 'order-item';
  listItem.innerHTML = `
    <span class="order-id">Pedido #${order.id}</span>
    <span class="order-status">${order.status}</span>
  `;
  orderList.appendChild(listItem);

  totalCount++;
  pendingCount++;
  updateStats();
}

// Actualiza el estado visual del pedido en el DOM
function updateOrderStatus(order, status) {
  const listItem = document.getElementById(`order-${order.id}`);
  if (!listItem) return;

  const statusEl = listItem.querySelector('.order-status');
  statusEl.textContent = status;

  if (status === 'Completado') {
    listItem.classList.add('completed');
  }
}

// Actualiza los contadores mostrados en pantalla
function updateStats() {
  totalCountEl.textContent = totalCount;
  pendingCountEl.textContent = pendingCount;
  completedCountEl.textContent = completedCount;
}

// ------------------------------------------------------------
// Promise + setTimeout: simula el tiempo de preparación.
// Se resuelve tras un tiempo aleatorio entre 2 y 6 segundos.
// ------------------------------------------------------------
function prepareOrder(order) {
  return new Promise((resolve) => {
    const preparationTime = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(() => {
      resolve({ ...order, status: 'Completado', time: preparationTime });
    }, preparationTime);
  });
}

// ------------------------------------------------------------
// async/await: espera a que el pedido termine y refresca la UI.
// Varios pedidos pueden estar procesándose en paralelo porque
// el Event Loop los gestiona sin bloquear el hilo principal.
// ------------------------------------------------------------
async function processOrder(order) {
  try {
    const completedOrder = await prepareOrder(order);

    updateOrderStatus(completedOrder, completedOrder.status);

    pendingCount--;
    completedCount++;
    updateStats();

    console.log(
      `✅ Pedido #${completedOrder.id} completado en ${completedOrder.time} ms`
    );
  } catch (error) {
    console.error(`❌ Error procesando pedido #${order.id}:`, error);
    updateOrderStatus(order, 'Error');
  }
}
