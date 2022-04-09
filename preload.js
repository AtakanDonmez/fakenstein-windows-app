const {ipcRenderer, contextBridge} = require('electron');
const path = require('path');

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
});