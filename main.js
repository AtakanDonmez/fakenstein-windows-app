console.log('Hello World');
const {BrowserWindow, app, ipcMain, Notification, dialog} = require('electron');
const path = require("path");
const fs = require("fs");
const spawn = require("child_process").spawn;

const isDev = !app.isPackaged;

global.filepath = undefined;

function  createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
}

if (isDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}


ipcMain.on('notify', (_, message) => {
    new Notification({title: 'Notification', body: message}).show();
})

ipcMain.on('upload', (event) => {
    dialog.showOpenDialog({
        title: 'Select the File to be uploaded',
        defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Upload',
        // Restricting the user to only Text Files.
        filters: [
            { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }, ],
        // Specifying the File Selector Property
        properties: ['openFile']
    }).then(({canceled, filePaths, bookmarks}) => {
        if (!canceled){
            const filepath = fs.readFileSync(filePaths[0]).toString('base64');
            event.reply("uploaded", filepath);
        }
    })
})

ipcMain.on('next_page', (event) => {

})

ipcMain.on('boundary_box', (event) =>{
    console.log("python start");
    let pypath = path.join(__dirname, 'assets', 'test.py');
    console.log(pypath);
    let py = spawn('python',[pypath, filepath]);
    py.stdout.on('data', data => console.log('data : ', data.toString()));
    py.on('close', ()=>{
        console.log("python end");
    })
})

app.whenReady().then(createWindow)