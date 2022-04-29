import React from "react";
import FaceBox from "../js/FaceBox";


export default function SelectFace(imageSrc){

    return(
        <div style={styles.container}>
            <img src={imageSrc} style={styles.image}/>
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
