import React, { useState } from 'react';

export default function PopupBox({inx, face, open}) {
    const [selected, setSelected] = useState(false);

    const openEdit = () => {
        setSelected(!selected);
        if(!selected) open(inx);
    };

    return(
        <button
            onClick={openEdit}
            style={{...selected ? styles.boxSelected : styles.boxBackground,
                ...{height: face.height,
                    width: face.width,
                    top: face.top,
                    left: face.left,}}}
        />
    );
}

const styles = {
    boxBackground: {
        position: "absolute",
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'yellow',
        opacity: 0.5,
    },
    boxSelected: {
        position: "absolute",
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        opacity: 0.5,
    },
};