const { ipcRenderer } = require('electron');

const closeBtn = document.getElementById('close');

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    ipcRenderer.send('window-close');
  });
}

// Close window on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ipcRenderer.send('window-close');
  }
}); 