const mouseIaFace = document.querySelector('#ia-face');
const mouseChat = document.querySelector('#chat');
let mouseStartX;
let mouseIsSwiping = false;

document.addEventListener('mousedown', (event) => {
    mouseStartX = event.clientX;
    mouseIsSwiping = true;
});

document.addEventListener('mousemove', (event) => {
    if (!mouseIsSwiping) return;

    const mouseCurrentX = event.clientX;
    const mouseDeltaX = mouseCurrentX - mouseStartX;

    if (mouseDeltaX > 50) {
        // Arrasto para a direita
        mouseIaFace.style.display = "flex";
        mouseChat.style.display = "flex";
        mouseIsSwiping = false;
    } else if (mouseDeltaX < -50) {
        // Arrasto para a esquerda
        mouseIaFace.style.display = "none";
        mouseChat.style.display = "none";
        mouseIsSwiping = false;
    }
});

document.addEventListener('mouseup', () => {
    mouseIsSwiping = false;
});
