const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('back-btn');
  const closeBtn = document.getElementById('close-btn');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'main.html';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      ipcRenderer.send('close-app');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ipcRenderer.send('close-app');
    }
  });
});
