console.log('Hello World');
const {BrowserWindow, app, ipcMain, Notification, dialog, BrowserView} = require('electron');
const path = require("path");
const fs = require("fs");
const spawn = require("child_process").spawn;
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

const isDev = !app.isPackaged;

var filepath = undefined;
var imageData = undefined;
/*global.ImageSource = {
    imageSrc: '123props'
}*/
global.ImageSource = "123props"

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

    remoteMain.enable(win.webContents);
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
        // Restricting the user to only Image Files.
        filters: [
            { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }, ],
        // Specifying the File Selector Property
        properties: ['openFile']
    }).then(({canceled, filePaths, bookmarks}) => {
        if (!canceled){
            filepath = filePaths[0];
            let base_64 = fs.readFileSync(filePaths[0]).toString('base64');
            console.log(filepath);
            event.reply("uploaded", base_64);
        }
    })
})

ipcMain.on('next_page', (event) => {
    console.log(filepath + "   nextpage version");
    let base_64 = fs.readFileSync(filepath).toString('base64');
    let extension = path.extname(base_64);
    let imageSrc = 'data:image/' + extension + ';base64,' + base_64;
    imageData = imageSrc;
    event.reply("drawn", imageSrc);
})

ipcMain.on('boundary_box', (event) =>{
    console.log("python start");
    let pypath = path.join(__dirname, 'assets', 'final.py');
    console.log(pypath);
    console.log(filepath);
    let py = spawn('python',[pypath, filepath]);
    py.stdout.on('data', data => console.log('data : ', data.toString()));
    py.on('close', ()=>{
        console.log("python end");
    })
})

ipcMain.on('setGlobal', (event, imgSrc) =>{
    console.log(imgSrc);
    global.ImageSource = imgSrc;
})

app.whenReady().then(createWindow)
