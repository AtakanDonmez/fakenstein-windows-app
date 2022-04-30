const {ipcRenderer, contextBridge, webContents} = require('electron');
const path = require('path');
const remote = require('@electron/remote');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    },
    batteryApi: {

    },
    filesApi: {
        getImage() {
            ipcRenderer.send('upload');
        },
    },
    globalsApi: {
        imgSource : "props",
        setImgSource(imgSrc){
            ipcRenderer.send('setGlobal', imgSrc);
        },
        getImgSource(){
            return remote.getGlobal('ImageSource');
        }
    },
    nextPageApi: {
        nextPage(){
            ipcRenderer.send('next_page');
        }
    },

    modelsApi: {
        boundaryBox(){
            ipcRenderer.send('boundary_box');
        }
    }
});


ipcRenderer.on("uploaded", (event, filepath) => {
    //example for .png
    extension = path.extname(filepath);
    var _out = '<img src="data:image/' + extension + ';base64,' + filepath + '" />';
    //render/display
    var _target = document.getElementById('image_container');
    _target.innerHTML = _out;

    electron.globalsApi.setImgSource("props123");
});

ipcRenderer.on("drawn", (event, imageSrc) => {
    var _out = '<img src="' + imageSrc + '"/>'
    //var _out = '<SelectFace imageSrc="' + imageSrc + '"/>'
    var _target = document.getElementById('faces_container');
    _target.innerHTML = _out;
})