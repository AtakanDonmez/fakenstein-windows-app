import React from "react";
import FaceBox from "../js/FaceBox";


export default function SelectFace(props){

    return(
        <div style={styles.container}>
            <img src={props.image} style={styles.image}/>
            <div style={styles.boxContainer}>
                <FaceBox/>
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
};
