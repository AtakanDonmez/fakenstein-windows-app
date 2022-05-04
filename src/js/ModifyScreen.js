import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";
import FaceBox from "./FaceBox";
import PopupBox from "./PopupBox";

export default function ModifyScreen() {
    var imageSrc = electron.globalsApi.getImgSource();
    const [image, setImage] = useState(imageSrc);
    const [boxes, setBoxes] = useState([]);
    const [index, setIndex] = useState(0);

    //let popupRef = React.createRef();
    const imageHeight = 350;

    useEffect(() => {
        setBoxes([{isBackground: true, height: 100, width: 100, top: 50, left: 50},
            {isBackground: false, height: 100, width: 100, top: 100, left: 200}])
    }, [])

    const showPopup = (ind) => {
        //setIndex(ind);
        console.log("MODIFY SHOW");
        //popupRef.show(boxes[ind]);
    }

    return (
        <div style={styles.container}>
            <p style={styles.text}>Select faces to modify</p>
            <img src={imageSrc} style={styles.image}/>
            <div style={{...styles.boxContainer, ...{height: imageHeight,}}}>
                {(boxes.length > 0) && boxes.map((face, index) => (
                    <PopupBox key={index} inx={index} face={face} open={showPopup}/>
                ))}
            </div>
        </div>
    )
}

const styles ={
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
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
        top: 88,
        left: 48,
    },
    text: {
        color: Colors.dark.text,
        fontSize: 20,
        fontWeight: '600',
    },
};