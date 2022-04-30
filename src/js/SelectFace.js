import React, {useState, useEffect} from "react";
import FaceBox from "../js/FaceBox";

export default function SelectFace(props){
/*    var face1 = {isBackground: true, height: 100, width: 100, top: 50, left: 50};
    var face2 = {isBackground: false, height: 100, width: 100, top: 100, left: 200};*/

    const [image, setImage] = useState(props.image);
    const [faces, setFaces] = useState([]);
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        setFaces([{isBackground: true, height: 100, width: 100, top: 50, left: 50},
                {isBackground: false, height: 100, width: 100, top: 100, left: 200}]);

        const dimensions = 0;
        setImageHeight(500);
    }, [image]);

    return(
        <div style={styles.container}>
            <p style={styles.text}>Select faces to replace</p>
            <img src={props.image} style={styles.image}/>
            <div style={{...styles.boxContainer, ...{height: imageHeight,}}}>
                {(faces.length > 0) && faces.map((face, index) => (
                    <FaceBox key={index} face={face}/>
                ))}
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
    text: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
    },
};
