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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.fabric-entry-form');
  const tableBody = document.getElementById('entryTableBody');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const chalonNo = document.getElementById('chalonNo').value;
    const partyName = document.getElementById('partyName').value;
    const fabricMtr = document.getElementById('fabricMtr').value;
    const fabricRate = document.getElementById('fabricRate').value;
    const sgst = document.getElementById('sgst').value;
    const cgst = document.getElementById('cgst').value;
    const date = document.getElementById('date').value;
    const totalAmount = document.getElementById('totalAmount').value;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${chalonNo}</td>
      <td>${partyName}</td>
      <td>${fabricMtr}</td>
      <td>${fabricRate}</td>
      <td>${sgst}</td>
      <td>${cgst}</td>
      <td>${date}</td>
      <td>${totalAmount}</td>
    `;
    tableBody.appendChild(row);
    form.reset();
  });
});
