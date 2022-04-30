import React from "react";
import { Link} from "react-router-dom";
import {Colors} from "../Colors";

export default function App(){
    var image = electron.globalsApi.getImgSource();
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>I am App Component</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('My custom notification!')
            }} style={styles.button}>Notify</button>
            <h2 style={styles.title}>File Upload in Electron</h2>
            <button onClick={() => {
                electron.filesApi.getImage()
            }} style={styles.button}>Upload File</button>
            <div id="image_container" style={styles.image}></div>
            <img src={image} style={styles.image}/>
            <button onClick={() =>
                electron.modelsApi.boundaryBox()
            } style={styles.button}>Draw Boundary Box</button>
            <div className="App" style={styles.container}>
                <Link to="/nextpage">
                    <button onClick={() =>
                        electron.nextPageApi.nextPage()
                    } style={styles.button}>Next Page</button>
                </Link>  
            </div>
             
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark.background,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    infoContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        backgroundColor: Colors.dark.background,
    },
    galleryText: {
        paddingBottom: 16,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.dark.text,
    },
    infoText: {
        fontSize: 20,
        paddingVertical: 8,
        textAlign: 'center',
        color: Colors.dark.text,
    },
    logo: {
        alignItems: 'center',
        width: 400,
        height: 400,
    },
    image: {
        flex: 1,
        width: 500,
        height: undefined,
        resizeMode: 'contain',
    },
    button: {
        padding: 5,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.dark.background,
        backgroundColor: Colors.dark.text,
    },
}