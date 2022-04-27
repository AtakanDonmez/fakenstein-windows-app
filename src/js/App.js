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
            <div id="image_container"></div>
            <button onClick={() =>
                electron.modelsApi.boundaryBox()
            }>Draw Boundary Box</button>
            <button onClick={() => {
                drawBoundaries()
            }}>Draw2</button>
            <button onClick={() =>
                electron.nextPageApi.nextPage()
            }>Next Page</button>
        </>
    )
}

function drawBoundaries(){
    var _target = document.getElementById('image_container');
    var _in = _target.innerHTML;

    return(
        <div style={styles.container}>
            {_in}
            <div style={styles.boxContainer}>
                <button style={styles.boxForeground}></button>
            </div>
        </div>);
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dark',
    },
    image: {
        flex: 1,
        width: 500,
        height: undefined,
        resizeMode: 'contain',
    },
    boxContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: 500,
        height: 500,
    },
    boxForeground: {
        position: 'absolute',
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 2,
        borderRadius: 4,
        opacity: 0.3,
        height: 50,
        width: 50,
        top: 50,
        left: 50,
    },
};