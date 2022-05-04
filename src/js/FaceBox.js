import React, {useState, useEffect} from "react";

export default function FaceBox({inx, face}) {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        setSelected(face.isBackground);
    }, []);

    const selectBox = () => {
        setSelected((!selected));
        electron.filesApi.setIsBackground(inx, selected);
    };

    return(
        <button onClick={selectBox} style={{...selected ? styles.boxBackground : styles.boxForeground,
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