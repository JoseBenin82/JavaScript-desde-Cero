// Diccionarios de caracteres
const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Elementos del DOM
const slider = document.getElementById('length-slider');
const lengthVal = document.getElementById('length-val');
const btnGenerate = document.getElementById('generate-btn');
const btnCopy = document.getElementById('copy-btn');
const resultEl = document.getElementById('password-result');
const strengthText = document.getElementById('strength-text');
const bars = document.querySelectorAll('.bar');

// Checkboxes
const cbUpper = document.getElementById('uppercase');
const cbLower = document.getElementById('lowercase');
const cbNumbers = document.getElementById('numbers');
const cbSymbols = document.getElementById('symbols');

// Actualizar el valor del slider en la UI
slider.addEventListener('input', (e) => {
    lengthVal.textContent = e.target.value;
});

// Función para generar número aleatorio seguro
function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Calcular fuerza de la contraseña
function calculateStrength(length, upper, lower, numbers, symbols) {
    let strength = 0;
    if (upper) strength += 1;
    if (lower) strength += 1;
    if (numbers) strength += 1;
    if (symbols) strength += 1;

    // Penalizar si es muy corta
    if (length < 10 && strength > 2) strength = 2;
    if (length >= 14 && strength >= 3) strength = 4;

    return Math.max(1, Math.min(strength, 4)); // Devolver entre 1 y 4
}

// Actualizar UI del medidor de fuerza
function updateStrengthUI(strength) {
    const labels = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
    strengthText.textContent = labels[strength - 1];

    bars.forEach((bar, index) => {
        bar.className = 'bar'; // Reset
        if (index < strength) {
            bar.classList.add('active');
            bar.dataset.level = strength; // Para el color en CSS
        }
    });
}

// Lógica principal de generación
btnGenerate.addEventListener('click', () => {
    const length = +slider.value;
    const hasUpper = cbUpper.checked;
    const hasLower = cbLower.checked;
    const hasNumbers = cbNumbers.checked;
    const hasSymbols = cbSymbols.checked;

    let allowedChars = '';
    let generatedPassword = '';

    if (hasUpper) allowedChars += CHAR_SETS.uppercase;
    if (hasLower) allowedChars += CHAR_SETS.lowercase;
    if (hasNumbers) allowedChars += CHAR_SETS.numbers;
    if (hasSymbols) allowedChars += CHAR_SETS.symbols;

    // Validación si no se selecciona nada
    if (allowedChars === '') {
        resultEl.textContent = 'Selecciona una opción';
        resultEl.classList.add('placeholder');
        return;
    }

    // Generar la contraseña iterando hasta la longitud deseada
    for (let i = 0; i < length; i++) {
        generatedPassword += getRandomChar(allowedChars);
    }

    // Actualizar UI
    resultEl.textContent = generatedPassword;
    resultEl.classList.remove('placeholder');

    // Calcular y mostrar fuerza
    const strengthLevel = calculateStrength(length, hasUpper, hasLower, hasNumbers, hasSymbols);
    updateStrengthUI(strengthLevel);
});

// Lógica de copiado al portapapeles
btnCopy.addEventListener('click', () => {
    const password = resultEl.textContent;
    if (!password || resultEl.classList.contains('placeholder')) return;

    navigator.clipboard.writeText(password).then(() => {
        // Podrías mostrar una pequeña alerta aquí
        console.log("Contraseña copiada: ", password);
    });
});