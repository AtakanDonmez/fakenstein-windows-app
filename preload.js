const {ipcRenderer, contextBridge, webContents} = require('electron');
const path = require('path');
const remote = require('@electron/remote');
var navigator = undefined;

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
        setImgSource(imgSrc){
            ipcRenderer.send('setGlobal', imgSrc);
        },
        getImgSource(){
            return remote.getGlobal('imageSource');
        },
        getLogoSource(){
            return remote.getGlobal('logoSource');
        },
        getDWidth(){
            return remote.getGlobal(('dWidth'));
        },
        getDHeight(){
            return remote.getGlobal(('dHeight'));
        }
    },
    nextPageApi: {
        nextPage(){
            ipcRenderer.send('next_page');
        }
    },

    modelsApi: {
        boundaryBox(navigate){
            ipcRenderer.send('boundary_box');
            navigate("/loadingscreen");
            ipcRenderer.on("drawn", event => {
                navigate("/selectface");
            });
        }
    }
});


ipcRenderer.on("uploaded", (event, filepath) => {
    //example for .png
    /*extension = path.extname(filepath);
    var _out = '<img src="data:image/' + extension + ';base64,' + filepath + '" />';
    //render/display
    var _target = document.getElementById('image_container');
    _target.innerHTML = _out;*/
});

/*ipcRenderer.on("drawn", event => {
    console.log("drawn");
});*/
