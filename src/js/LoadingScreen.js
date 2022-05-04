import React from "react";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";

export default function EditScreen() {
    const logo = electron.globalsApi.getLogoSource();
    return (
        <div style={styles.container}>
            <img src={logo} style={styles.logo}/>
            <h1 style={styles.title}>Loading...</h1>
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
}