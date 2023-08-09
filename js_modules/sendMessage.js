    const chatLog = document.querySelector('#chat-log');
    const chatInput = document.querySelector('#chat-input input');
    const chatButton = document.querySelector('#chat-input button');

    function sendMessage() {
      const messageText = chatInput.value.trim();
      if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add('outgoing');
        const textElement = document.createElement('p');
        textElement.textContent = messageText;
        messageElement.appendChild(textElement);
        chatLog.appendChild(messageElement);
        chatInput.value = '';
        chatLog.scrollTop = chatLog.scrollHeight;
      }
    }

    chatButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });