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
    <nav class="menu-bar">
      <ul>
      
        <li class="dropdown">
          <a href="#" id="menu-master">Master</a>
          <ul class="dropdown-content" id="dropdown-master">
            <li><a href="#" id="master-customer">Customer</a></li>
            <li><a href="#" id="master-product">Product</a></li>
            <li><a href="#" id="master-supplier">Supplier</a></li>
          </ul>
        </li>
        <li><a href="#" id="menu-profile">Transaction</a></li>
        <li><a href="#" id="menu-settings">View</a></li>
        <li><a href="#" id="menu-logout">Logout</a></li>
      </ul>
    </nav>
    <div class="container">
      <div class="main-content">
        <h1>Welcome, Swissfort!</h1>
        <p>You have successfully logged in.</p>
        <p>when i click menu item tha time open the drpdown and alt+that first letter then also open the dropdown</p>
      </div>
    </div>
  `;

  // Attach event listeners
  document.getElementById('minimize-btn').onclick = () => ipcRenderer.send('minimize-window');
  document.getElementById('maximize-btn').onclick = () => ipcRenderer.send('toggle-maximize-window');
  document.getElementById('close-btn').onclick = () => ipcRenderer.send('close-app');

  // Dropdown toggle for Master
  const masterMenu = document.getElementById('menu-master');
  const masterDropdown = document.getElementById('dropdown-master');
  masterMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent document click from firing
    masterDropdown.classList.toggle('show');
  });
  // Prevent dropdown click from closing itself
  masterDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  // Close dropdown if clicked outside Master or dropdown
  document.addEventListener('click', (e) => {
    if (!masterMenu.contains(e.target) && !masterDropdown.contains(e.target)) {
      masterDropdown.classList.remove('show');
    }
  });

  // Optionally, send fullscreen on load
  ipcRenderer.send('fullscreen-window');
}

document.addEventListener('DOMContentLoaded', renderMainScreen);
