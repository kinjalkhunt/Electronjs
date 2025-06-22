const { ipcRenderer } = require('electron');

function renderMainScreen() {
  document.body.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-left">
        <img src="../renderer/assets/LOGO.jpg" alt="Logo" class="logo" />
        <span class="login-title">Main Screen</span>
      </div>
      <div class="title-bar-right">
        <button id="minimize-btn" class="title-bar-button">🗕</button>
        <button id="maximize-btn" class="title-bar-button">🗖</button>
        <button id="close-btn" class="title-bar-button">✕</button>
      </div>
    </div>
    <div class="container">
      <div class="main-content">
        <h1>Welcome, Swissfort!</h1>
        <p>You have successfully logged in.</p>
      </div>
    </div>
  `;

  // Attach event listeners
  document.getElementById('minimize-btn').onclick = () => ipcRenderer.send('minimize-window');
  document.getElementById('maximize-btn').onclick = () => ipcRenderer.send('toggle-maximize-window');
  document.getElementById('close-btn').onclick = () => ipcRenderer.send('close-app');

  // Optionally, send fullscreen on load
  ipcRenderer.send('fullscreen-window');
}

document.addEventListener('DOMContentLoaded', renderMainScreen);
