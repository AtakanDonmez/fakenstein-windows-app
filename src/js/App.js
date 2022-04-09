import React from "react";
export default function App(){
    return(
        <>
            <h1>I am App Component</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('My custom notification!')
            }}>Notify</button>
            <h2>File Upload in Electron</h2>
            <button onClick={() => {
                electron.filesApi.getImage()
            }}>Upload File</button>
        </>
    )
}
