import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import FaceBox from "../js/FaceBox";
import {Colors} from "../Colors";

//TODO mount faceboxes on proper positions
export default function SelectFaceScreen({face}) {
    const location = useLocation();
    var imageSrc = electron.globalsApi.getImgSource();
    const [image, setImage] = useState(imageSrc);
    const [faces, setFaces] = useState([]);
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        //setFaces([{isBackground: true, height: 100, width: 100, top: 50, left: 50},
        //    {isBackground: false, height: 100, width: 100, top: 100, left: 200}]);
        setFaces(location.state.faces);
        console.log(location.state.faces);
        const dimensions = 0;
        setImageHeight(350);
    }, [location.state]);

    return (
        <div className='App' style={styles.container}>
            <p style={styles.text}>Select faces to replace</p>
            <img src={image} style={styles.image}/>
            <div style={{...styles.boxContainer, ...{height: imageHeight,}}}>
                {(faces.length > 0) && faces.map((face, index) => (
                    <FaceBox key={index} face={face}/>
                ))}
            </div>
            <div>
                <Link to="/*">
                    <button style={styles.cancelButton}>
                        Cancel
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/modifyscreen">
                    <button style={styles.button}>
                        Replace Faces
                    </button>
                </Link>
            </div>
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
