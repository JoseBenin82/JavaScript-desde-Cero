const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
    setStatus('Axios', 'loading');
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const data = response.data;
            renderCharacters(data.results);
            setStatus('Axios', 'success');
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
            setStatus('Axios', 'error');
        });
});
