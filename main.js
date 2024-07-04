const { app, BrowserWindow } = require("electron");

// Criar janela do Electron
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Carregar o arquivo HTML
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

// ========================================================