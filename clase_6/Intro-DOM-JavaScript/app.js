const inputComment = document.getElementById('commentInput');
const addBtn = document.getElementById('addBtn');
const commentsContainer = document.getElementById('commentsContainer');

addBtn.addEventListener('click', () => {
    const text = inputComment.value.trim();
    if (text !== "") {
        addCommentToDOM(text, commentsContainer);
        inputComment.value = ""; // Limpiar input principal
    } else {
        alert("Escribe algo primero.");
    }
});

// Función maestra para crear comentarios (se usa para principales y respuestas)
function addCommentToDOM(text, parentElement) {
    
    // 1. Crear la tarjeta del comentario
    const card = document.createElement('div');
    card.classList.add('comment-card');

    // 2. Crear fecha y texto
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('comment-date');
    dateSpan.textContent = new Date().toLocaleString();

    const pText = document.createElement('p');
    pText.classList.add('comment-text');
    pText.textContent = text;

    // 3. Crear contenedor de acciones (botones)
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const replyBtn = document.createElement('button');
    replyBtn.textContent = "Responder";
    replyBtn.classList.add('btn-reply');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add('btn-delete');

    actionsDiv.appendChild(replyBtn);
    actionsDiv.appendChild(deleteBtn);

    // 4. Crear contenedor para futuras respuestas (anidación)
    const repliesContainer = document.createElement('div');
    repliesContainer.classList.add('replies-container');

    // 5. Armar la tarjeta
    card.appendChild(dateSpan);
    card.appendChild(pText);
    card.appendChild(actionsDiv);
    card.appendChild(repliesContainer); // Aquí irán los hijos

    // Insertar en el DOM (al principio de la lista)
    parentElement.prepend(card);

    // --- LÓGICA DE LOS BOTONES ---

    // Botón Eliminar
    deleteBtn.addEventListener('click', () => {
        // Preguntar confirmación para evitar accidentes
        if(confirm("¿Borrar este comentario?")) {
            card.remove();
        }
    });

    // Botón Responder
    replyBtn.addEventListener('click', () => {
        // Evitar abrir múltiples cajas de respuesta a la vez en el mismo comentario
        if (card.querySelector('.reply-input-box')) return;

        createReplyInput(repliesContainer, replyBtn);
    });
}

// Función auxiliar para crear la cajita de respuesta pequeña
function createReplyInput(targetContainer, triggerBtn) {
    // Crear contenedor temporal
    const box = document.createElement('div');
    box.classList.add('reply-input-box');

    const textarea = document.createElement('textarea');
    textarea.placeholder = "Escribe tu respuesta...";

    const submitReplyBtn = document.createElement('button');
    submitReplyBtn.textContent = "Enviar Respuesta";
    submitReplyBtn.style.backgroundColor = "#28a745"; // Verde
    
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancelar";
    cancelBtn.style.backgroundColor = "#6c757d"; // Gris
    cancelBtn.style.marginLeft = "5px";

    box.appendChild(textarea);
    box.appendChild(submitReplyBtn);
    box.appendChild(cancelBtn);

    // Insertar la caja antes de las respuestas existentes
    targetContainer.prepend(box);

    // Acción Enviar Respuesta
    submitReplyBtn.addEventListener('click', () => {
        const replyText = textarea.value.trim();
        if (replyText !== "") {
            // RECURSIVIDAD: Llamamos a la misma función maestra
            // pero le pasamos el 'targetContainer' como padre
            addCommentToDOM(replyText, targetContainer);
            box.remove(); // Quitamos la caja de escribir
        }
    });

    // Acción Cancelar
    cancelBtn.addEventListener('click', () => {
        box.remove();
    });
}