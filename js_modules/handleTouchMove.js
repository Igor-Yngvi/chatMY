const touchIaFace = document.querySelector('#ia-face');
const touchChat = document.querySelector('#chat');
let touchStartX;
let touchIsSwiping = false;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    touchIsSwiping = true;
});

document.addEventListener('touchmove', (event) => {
    if (!touchIsSwiping) return;

    const touchCurrentX = event.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX;

    if (touchDeltaX > 50) {
        // Arrasto para a direita
        touchIaFace.style.display = "flex";
        touchChat.style.display = "flex";
        touchIsSwiping = false;
    } else if (touchDeltaX < -50) {
        // Arrasto para a esquerda
        touchIaFace.style.display = "none";
        touchChat.style.display = "none";
        touchIsSwiping = false;
    }
});

document.addEventListener('touchend', () => {
    touchIsSwiping = false;
});
