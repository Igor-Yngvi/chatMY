const html = document.querySelector('html');
const buttonEvent = document.querySelector('#chat-input button');
const chatInputEvent = document.querySelector('#chat-input');
const temaEscuro = document.getElementById('tema-escuro');
const addExt = document.getElementById('add-ext');
const iaPlus = document.getElementById('ia-plus');
const maisTemas = document.getElementById('mais-temas');
const optionsNameParagraph = document.querySelector('#options-name p');

temaEscuro.addEventListener('mouseover', () => {
    optionsNameParagraph.textContent = 'Tema Escuro';
});

temaEscuro.addEventListener('mouseout', () => {
    optionsNameParagraph.textContent = 'Opções';
});

temaEscuro.addEventListener('click', () => {
    html.style.background = "#353535";
    chatInputEvent.style.background = "#000";
    buttonEvent.style.background = "#000"
});

addExt.addEventListener('mouseover', () => {
    optionsNameParagraph.textContent = 'Adicionar Extenção';
});

addExt.addEventListener('mouseout', () => {
    optionsNameParagraph.textContent = 'Opções';
});

iaPlus.addEventListener('mouseover', () => {
    optionsNameParagraph.textContent = 'Ia plus';
});

iaPlus.addEventListener('mouseout', () => {
    optionsNameParagraph.textContent = 'Opções';
});

maisTemas.addEventListener('mouseover', () => {
    optionsNameParagraph.textContent = 'Mais Temas';
});

maisTemas.addEventListener('mouseout', () => {
    optionsNameParagraph.textContent = 'Opções';
});