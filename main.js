console.log('Hello World');
const {BrowserWindow, app, ipcMain, Notification, dialog} = require('electron');
const path = require("path");
const fs = require("fs");

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

ipcMain.on("chooseFile", (event, arg) => {
    const result = dialog.showOpenDialog({
        properties: ["openFile"],
        filters: [{ name: "Images", extensions: ["png","jpg","jpeg"] }]
    });

    result.then(({canceled, filePaths, bookmarks}) => {
        const base64 = fs.readFileSync(filePaths[0]).toString('base64');
        event.reply("chosenFile", base64);
    }).catch(err => {
        console.log(err)
    });
});

app.whenReady().then(createWindow)

/* (file => {
    // Stating whether dialog operation was
    // cancelled or not.
    console.log(file.filePaths[0]);
    console.log(file.canceled);
    if (!file.canceled) {
        // Updating the GLOBAL filepath variable to user-selected file.
        global.filepath = file.filePaths[0];
        event.reply("uploaded", filepath);
    }
}).catch(err => {
    console.log(err)
}); */