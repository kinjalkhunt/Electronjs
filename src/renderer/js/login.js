const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-btn');

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

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    if (username === 'kinjal' && password === 'kinjal@123') {
      console.log('Login successful, redirecting to main.html');
      errorDiv.style.display = 'none';
      window.location.href = 'main.html';
    } else {
      console.log('Invalid username or password');
      errorDiv.textContent = 'Invalid username or password';
      errorDiv.style.display = 'block';
    }
  });
}); 