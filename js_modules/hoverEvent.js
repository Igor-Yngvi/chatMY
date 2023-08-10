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