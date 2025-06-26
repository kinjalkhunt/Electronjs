const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners
  document.getElementById('minimize-btn').onclick = () => ipcRenderer.send('minimize-window');
  document.getElementById('maximize-btn').onclick = () => ipcRenderer.send('toggle-maximize-window');
  document.getElementById('close-btn').onclick = () => ipcRenderer.send('close-app');

  // Dropdown toggle for Master
  const masterMenu = document.getElementById('menu-master');
  const masterDropdown = document.getElementById('dropdown-master');
  const transactionMenu = document.getElementById('menu-transaction');
  const transactionDropdown = document.getElementById('dropdown-transaction');

  masterMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent document click from firing
    // Close transaction dropdown if open
    transactionDropdown.classList.remove('show');
    // Toggle master dropdown
    masterDropdown.classList.toggle('show');
  });
  // Prevent dropdown click from closing itself
  masterDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  transactionMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Close master dropdown if open
    masterDropdown.classList.remove('show');
    // Toggle transaction dropdown
    transactionDropdown.classList.toggle('show');
  });
  transactionDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close dropdowns if clicked outside both menus and dropdowns
  document.addEventListener('click', (e) => {
    if (
      !masterMenu.contains(e.target) &&
      !masterDropdown.contains(e.target) &&
      !transactionMenu.contains(e.target) &&
      !transactionDropdown.contains(e.target)
    ) {
      masterDropdown.classList.remove('show');
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
  // win.webContents.openDevTools();

});
