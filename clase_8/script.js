// --- 1. Lógica de la API y Renderizado de Películas ---
const moviesGrid = document.getElementById('movies-grid');

const loadMovies = async () => {
    try {
        // Obtenemos TODAS las películas de la API
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const movies = await response.json();
        
        movies.forEach(movie => {
            // Crear tarjeta por cada película
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            
            // Al hacer clic, abrimos el modal con los datos de ESA película
            card.addEventListener('click', () => openModal(movie));
            moviesGrid.appendChild(card);
        });
    } catch (error) {
        moviesGrid.innerHTML = '<p>Error al cargar las películas.</p>';
        console.error("Error API:", error);
    }
};

// --- 2. Lógica del Modal ---
const modal = document.getElementById('movie-modal');
const closeModalBtn = document.getElementById('close-modal');
const commentsContainer = document.getElementById('comments-container');

const openModal = (movie) => {
    // Llenar datos de la película en el modal
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('modal-img').src = movie.image;
    
    // Limpiar comentarios anteriores cada vez que abrimos una película nueva
    commentsContainer.innerHTML = '';
    document.getElementById('main-comment-text').value = '';

    // Mostrar el modal
    modal.classList.remove('hidden');
};

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// --- 3. Lógica de Comentarios Anidados ---
const mainForm = document.getElementById('main-comment-form');

const getCurrentTimestamp = () => {
    return new Date().toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
};

const createCommentElement = (text) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    commentDiv.innerHTML = `
        <div class="comment-header">
            <strong>Cinéfilo Anónimo</strong>
            <span>${getCurrentTimestamp()}</span>
        </div>
        <div class="comment-text">${text}</div>
        <div class="comment-actions">
            <button class="btn-reply">Responder</button>
            <button class="btn-delete">Eliminar</button>
        </div>
        <div class="reply-form-container"></div>
        <div class="replies-container"></div>
    `;

    const btnReply = commentDiv.querySelector('.btn-reply');
    const btnDelete = commentDiv.querySelector('.btn-delete');
    const replyFormContainer = commentDiv.querySelector('.reply-form-container');
    const repliesContainer = commentDiv.querySelector('.replies-container');

    // Eliminar comentario
    btnDelete.addEventListener('click', () => commentDiv.remove());

    // Responder comentario
    btnReply.addEventListener('click', () => {
        if (replyFormContainer.innerHTML !== '') return;

        const replyForm = document.createElement('form');
        replyForm.classList.add('comment-form');
        replyForm.innerHTML = `
            <textarea placeholder="Escribe tu respuesta..." required></textarea>
            <div style="display: flex; gap: 10px;">
                <button type="submit">Publicar</button>
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
            const newReplyElement = createCommentElement(replyText);
            repliesContainer.appendChild(newReplyElement);
            replyFormContainer.innerHTML = '';
        });
    });

    return commentDiv;
};

// Enviar comentario principal
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textArea = document.getElementById('main-comment-text');
    const text = textArea.value.trim();

    if (text !== '') {
        const newComment = createCommentElement(text);
        commentsContainer.prepend(newComment); 
        textArea.value = ''; 
    }
});

// Iniciar la aplicación
loadMovies();