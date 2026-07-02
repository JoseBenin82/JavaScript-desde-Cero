const dataContainer = document.getElementById('data-container');
const statusEl = document.getElementById('status');

function setStatus(method, state) {
    if (state === 'loading') {
        statusEl.className = 'loading';
        statusEl.innerHTML = `<span class="spinner"></span> Obteniendo datos con <strong>${method}</strong>...`;
    } else if (state === 'success') {
        statusEl.className = 'success';
        statusEl.innerHTML = `✓ Datos obtenidos con <strong>${method}</strong>`;
    } else if (state === 'error') {
        statusEl.className = 'error';
        statusEl.innerHTML = `✗ Error al obtener datos con <strong>${method}</strong>`;
    }
}

function renderCharacters(characters) {
    dataContainer.innerHTML = '';
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character-card');
        characterElement.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.species} - ${character.status}</p>
        `;
        dataContainer.appendChild(characterElement);
    });
}
