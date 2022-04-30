import React from "react";

export default function FaceBox({face}) {
    return(
        <button style={{...styles.boxForeground,
            ...{height: 50,
            width: 50,
            top: 50,
            left: 50,}}}/>
    );
}

const styles = {
    boxForeground: {
        position: 'absolute',
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 2,
        borderRadius: 4,
        opacity: 0.3,
    },
    boxBackground: {
        position: 'absolute',
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderRadius: 4,
        opacity: 0.5,
    },
};