import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Colors} from "../Colors";
import PopupBox from "./PopupBox";
import EditPopup from "./EditPopup";

export default function ModifyScreen() {
    var imageSrc = electron.globalsApi.getImgSource();
    const [image, setImage] = useState(imageSrc);
    const [boxes, setBoxes] = useState([]);
    const [index, setIndex] = useState(0);

    let popupRef = React.createRef();
    const imageHeight = 350;

    useEffect(() => {
        var faceLoader = electron.globalsApi.getFaces()
        /*setBoxes([{isBackground: true, height: 100, width: 100, top: 50, left: 50},
            {isBackground: false, height: 100, width: 100, top: 100, left: 200}])*/
        setBoxes(faceLoader);
        setImage(electron.globalsApi.getImgSource());
    }, [])

    const showPopup = (ind) => {
        setIndex(ind);
        console.log("MODIFY SHOW");
        console.log(popupRef);
        popupRef.show(boxes[ind]);
    }

    const closePopup = () => {
        popupRef.close();
    }

    const update = (box) => {
        console.log("Blend request.");
        const newBoxes = JSON.parse(JSON.stringify(boxes));
        newBoxes[index] = box;
        setBoxes(newBoxes);
    }

    const blur = (box) => {
        console.log("BLUR request.");
        const newBoxes = JSON.parse(JSON.stringify(boxes));
        newBoxes[index] = box;
        setBoxes(newBoxes);
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
            <EditPopup ref={(target) => popupRef = target} onTouchOutside={closePopup} blur={blur} apply={update}/>
            <div>
                <Link to="/selectface">
                    <button style={styles.cancelButton}>
                        Cancel
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/modifyscreen">
                    <button style={styles.button}>
                        Next
                    </button>
                </Link>
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
    button: {
        padding: 5,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.dark.background,
        backgroundColor: Colors.dark.text,
        borderRadius: 5,
    },
    cancelButton: {
        padding: 5,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.dark.background,
        backgroundColor: Colors.dark.cancel,
        borderRadius: 5,
    },
};