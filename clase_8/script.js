const booksGrid = document.getElementById('books-grid');

// 1. Cargar libros desde Open Library API
const loadBooks = async () => {
    try {
        // Obtenemos 12 libros del tema "Ciencia Ficción" (science_fiction)
        const response = await fetch('https://openlibrary.org/subjects/science_fiction.json?limit=12');
        const data = await response.json();
        const books = data.works; // La API devuelve los libros dentro del arreglo 'works'

        books.forEach(book => {
            // Generar la URL de la portada usando el cover_id
            const coverUrl = book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : 'https://via.placeholder.com/180x260?text=Sin+Portada';

            const authorName = book.authors ? book.authors[0].name : 'Autor desconocido';

            const card = document.createElement('div');
            card.classList.add('book-card');
            card.innerHTML = `
                <img src="${coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${authorName}</p>
            `;

            // Pasar los datos del libro y la portada al modal
            card.addEventListener('click', () => openModal(book, coverUrl, authorName));
            booksGrid.appendChild(card);
        });
    } catch (error) {
        booksGrid.innerHTML = '<p>Error al cargar la biblioteca.</p>';
        console.error("Error API:", error);
    }
};

// 2. Lógica del Modal y Seguimiento
const modal = document.getElementById('book-modal');
const closeModalBtn = document.getElementById('close-modal');
const commentsContainer = document.getElementById('comments-container');
const statusSelect = document.getElementById('status-select');

const openModal = (book, coverUrl, authorName) => {
    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = authorName;
    document.getElementById('modal-img').src = coverUrl;

    // Resetear notas y estado al abrir un libro nuevo
    commentsContainer.innerHTML = '';
    document.getElementById('main-comment-text').value = '';
    statusSelect.value = 'quiero-leer'; // Por defecto

    modal.classList.remove('hidden');
};

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// 3. Lógica de Notas Anidadas (Recursividad)
const mainForm = document.getElementById('main-comment-form');

const getCurrentTimestamp = () => {
    return new Date().toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
};

const createNoteElement = (text) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('comment');

    noteDiv.innerHTML = `
        <div class="comment-header">
            <strong>Mi Nota</strong>
            <span>${getCurrentTimestamp()}</span>
        </div>
        <div class="comment-text">${text}</div>
        <div class="comment-actions">
            <button class="btn-reply">Añadir sub-nota</button>
            <button class="btn-delete">Borrar</button>
        </div>
        <div class="reply-form-container"></div>
        <div class="replies-container"></div>
    `;

    const btnReply = noteDiv.querySelector('.btn-reply');
    const btnDelete = noteDiv.querySelector('.btn-delete');
    const replyFormContainer = noteDiv.querySelector('.reply-form-container');
    const repliesContainer = noteDiv.querySelector('.replies-container');

    btnDelete.addEventListener('click', () => noteDiv.remove());

    btnReply.addEventListener('click', () => {
        if (replyFormContainer.innerHTML !== '') return;

        const replyForm = document.createElement('form');
        replyForm.classList.add('comment-form');
        replyForm.innerHTML = `
            <textarea placeholder="Profundiza en esta idea..." required></textarea>
            <div style="display: flex; gap: 10px;">
                <button type="submit">Guardar</button>
                <button type="button" class="btn-cancel" style="background-color: #95a5a6;">Cancelar</button>
            </div>
        `;

        replyFormContainer.appendChild(replyForm);

        replyForm.querySelector('.btn-cancel').addEventListener('click', () => {
            replyFormContainer.innerHTML = '';
        });

        replyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const replyText = replyForm.querySelector('textarea').value;
            // ¡Aquí ocurre la magia recursiva!
            const newReplyElement = createNoteElement(replyText);
            repliesContainer.appendChild(newReplyElement);
            replyFormContainer.innerHTML = '';
        });
    });

    return noteDiv;
};

// Evento para la nota principal
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textArea = document.getElementById('main-comment-text');
    const text = textArea.value.trim();

    if (text !== '') {
        const newNote = createNoteElement(text);
        commentsContainer.prepend(newNote);
        textArea.value = '';
    }
});

// Inicializar
loadBooks();