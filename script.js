// Declaración de variables
const inputText = document.getElementById('input-text');
const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');
const outputImage = document.getElementById('output-image');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Función para validar el texto
function validateText(text) {
    const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

// Función para encriptar texto
function encryptText() {
    let text = inputText.value;

    if (!validateText(text)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    updateOutput(encryptedText);
}

// Función para desencriptar texto
function decryptText() {
    let text = inputText.value;

    if (!validateText(text)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    updateOutput(decryptedText);
}

// Función para actualizar el contenido del área de resultado
function updateOutput(text) {
    outputTitle.textContent = "Resultado:";
    outputText.textContent = text;
    outputImage.style.display = 'none';
    copyBtn.style.display = 'block';
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// Conectar funciones a eventos
encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copyToClipboard);
