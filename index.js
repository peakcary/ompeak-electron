const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready',function(){
  mainWindow = new BrowserWindow({
    height:650,
    width:1024
  });
  mainWindow.loadURL('file://'+__dirname+'/index.html');
});
