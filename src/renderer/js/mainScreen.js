const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
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

  // Dropdown toggle for Transaction
  const transactionMenu = document.getElementById('menu-transaction');
  const transactionDropdown = document.getElementById('dropdown-transaction');
  transactionMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    transactionDropdown.classList.toggle('show');
  });
  transactionDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  document.addEventListener('click', (e) => {
    if (!transactionMenu.contains(e.target) && !transactionDropdown.contains(e.target)) {
      transactionDropdown.classList.remove('show');
    }
  });

  // Open Fabric Entry page
  document.getElementById('transaction-fabric-entry').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'FabricEntry.html';
  });

  // Optionally, send fullscreen on load
  ipcRenderer.send('fullscreen-window');
  win.webContents.openDevTools();

});
