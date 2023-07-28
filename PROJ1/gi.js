function addMessage() {
    const messageBox = document.getElementById('messageBox');
    const messageList = document.getElementById('messageList');
    const message = messageBox.value.trim();
  
    if (message !== '') {
      const newMessage = document.createElement('div');
      newMessage.textContent = message;
      messageList.appendChild(newMessage);
      messageBox.value = '';
    }
    
    
  }
  