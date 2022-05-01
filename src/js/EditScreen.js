import React from "react";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";

export default function EditScreen() {
    return (
        <div style={styles.container}>
            <h1>HEllo</h1>
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