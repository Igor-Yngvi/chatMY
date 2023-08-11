const html = document.querySelector('html');
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
    html.style.background = "#000";
    chatInputEvent.style.background = "#353535";
});

addExt.addEventListener('mouseover', () => {
    optionsNameParagraph.textContent = 'Adicionar Extenção';
});

addExt.addEventListener('mouseout', () => {
    optionsNameParagraph.textContent = 'Opções';
});

addExt.addEventListener('click', function() {
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'file';
  hiddenInput.accept = '.ext';
  hiddenInput.style.display = 'none';
            
  hiddenInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
         const content = e.target.result;
                        
         const scriptTag = document.createElement('script');
         scriptTag.textContent = content;
                        
        document.body.appendChild(scriptTag);
      };

      reader.readAsText(file);
    }
  });
            
  document.body.appendChild(hiddenInput);
  hiddenInput.click();
           

  hiddenInput.addEventListener('change', function() {
    document.body.removeChild(hiddenInput);
  });
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

maisTemas.addEventListener('click', function() {
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'file';
  hiddenInput.accept = '.them';
  hiddenInput.style.display = 'none';
            
  hiddenInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const content = e.target.result;
                        
        const styleTag = document.createElement('style');
        styleTag.textContent = content;
                        
        document.head.appendChild(styleTag);
      };

      reader.readAsText(file);
    }
  });
            
  document.body.appendChild(hiddenInput);
  hiddenInput.click();
            
  // Remover o input depois que o arquivo for selecionado
  hiddenInput.addEventListener('change', function() {
    document.body.removeChild(hiddenInput);
  });
});