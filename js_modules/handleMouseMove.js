const iaFace = document.querySelector('#ia-face');
const chat = document.querySelector('#chat');
let startX;
let isSwiping = false;

document.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    isSwiping = true;
});

document.addEventListener('mousemove', (event) => {
    if (!isSwiping) return;

    const currentX = event.clientX;
    const deltaX = currentX - startX;

    if (deltaX > 50) {
        // Arrasto para a direita
        iaFace.style.display = "flex";
        chat.style.display = "flex";
        isSwiping = false;
    } else if (deltaX < -50) {
        // Arrasto para a esquerda
        iaFace.style.display = "none";
        chat.style.display = "none";
        isSwiping = false;
    }
});

document.addEventListener('mouseup', () => {
    isSwiping = false;
});
