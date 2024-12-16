const emojiPicker = document.querySelector('emoji-picker');
const emojiCanvas = document.getElementById('emoji-canvas');
const removeLastEmojiButton = document.getElementById('remove-last-emoji');
const downloadCanvasButton = document.getElementById('download-canvas');

// Add emoji from the picker
emojiPicker.addEventListener('emoji-click', event => {
    const emojiElement = document.createElement('span');
    emojiElement.textContent = event.detail.unicode;
    emojiElement.classList.add('emoji-item');
    emojiCanvas.appendChild(emojiElement);
});

// Remove the last emoji added
removeLastEmojiButton.addEventListener('click', () => {
    const lastEmoji = emojiCanvas.lastElementChild;
    if (lastEmoji) {
        emojiCanvas.removeChild(lastEmoji);
    }
});

// Download canvas as an image
downloadCanvasButton.addEventListener('click', () => {
    html2canvas(emojiCanvas, {
        scale: 5, // Aumenta la escala para mejor resolución
        backgroundColor: null, // Fondo transparente
        useCORS: true, // Permite cargar imágenes externas si es necesario
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'emoji-canvas.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
