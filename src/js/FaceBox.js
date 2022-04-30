import React from "react";

export default function FaceBox({face}) {
    return(
        <button style={{...styles.boxForeground,
            ...{height: face.height,
            width: face.width,
            top: face.top,
            left: face.left,}}}/>
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