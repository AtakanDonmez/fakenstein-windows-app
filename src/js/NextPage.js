import React from 'react';
import { Link} from "react-router-dom";
import SelectFace from "./SelectFace";
import {Colors} from "../Colors";

 export default function NextPage (){
    var image = electron.globalsApi.getImgSource();
    return (
        <div className='App' style={styles.container}>
            <SelectFace image={image}/>
            <Link to="/*">
                <button style={styles.button}>
                    Home Page
                </button>
            </Link>
        </div>
        
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
    },
    button: {
        padding: 5,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.dark.background,
        backgroundColor: Colors.dark.text,
    },
};
