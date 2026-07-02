const fetchBtn = document.getElementById('fetch-btn');

fetchBtn.addEventListener('click', () => {
    setStatus('Fetch', 'loading');
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            renderCharacters(data.results);
            setStatus('Fetch', 'success');
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
            setStatus('Fetch', 'error');
        });
});
