import React from "react";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";

export default function App() {
    var image = electron.globalsApi.getImgSource();
    const logo = electron.globalsApi.getLogoSource();
    return (
        <div style={styles.container}>
            <img src={logo} style={styles.logo}/>
            <h1 style={styles.title}>Fakenstein</h1>
            <div>
                <button onClick={() => {
                    electron.filesApi.getImage()
                }} style={styles.button}>Upload File
                </button>
            </div>
            <img src={image} style={styles.image}/>
            <div>
                <button onClick={() =>
                    electron.modelsApi.boundaryBox()
                } style={styles.button}>Draw Boundary Box
                </button>
                <Link to="/selectface">
                    <button onClick={() =>
                        electron.nextPageApi.nextPage()
                    } style={styles.button}>Next Page
                    </button>
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
        borderRadius: 5,
    },
}