// background.js

console.log("Background script is running!");

// Listen for messages from other scripts
self.addEventListener('message', event => {
    const message = event.data;
    
    if (message.type === 'consoleMessage') {
      console.log('[From Content Script/Popup/Background Script]:', message.message);
    }
  });
  
