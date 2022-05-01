import React from 'react';
import {Link} from "react-router-dom";
import SelectFace from "./SelectFace";
import {Colors} from "../Colors";

//TODO mount faceboxes on proper positions
export default function SelectFaceScreen() {
    var image = electron.globalsApi.getImgSource();
    return (
        <div className='App' style={styles.container}>
            <SelectFace image={image}/>
            <div>
                <Link to="/*">
                    <button style={styles.cancelButton}>
                        Cancel
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/editscreen">
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
};
