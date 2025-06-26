const path = require('path');

try {
  require('electron-reload')(__dirname, {
    electron: require(path.join(__dirname, '..', '..', 'node_modules', 'electron'))
  });
} catch (e) {
  // ignore errors
}

const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    minWidth: 400,
    minHeight: 300,
    // title: 'Login',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    resizable: true,
    frame: false,
  });

  win.loadFile(path.join(__dirname, '../renderer/login.html'));

  // win.webContents.openDevTools();

  ipcMain.on('close-app', () => {
    win.close();
  });

  ipcMain.on('maximize-window', () => {
    if (win) {
      win.maximize();
    }
  });

  ipcMain.on('fullscreen-window', () => {
    if (win) {
      win.setFullScreen(true);
    }
  });

  ipcMain.on('minimize-window', () => {
    if (win) {
      win.minimize();
    }
  });

  ipcMain.on('toggle-maximize-window', () => {
    if (win) {
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}); 