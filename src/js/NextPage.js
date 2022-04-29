import React from 'react';
import { Link} from "react-router-dom";
 export default function NextPage (){
    return (
        <div className='App'>
            <h1>Welcome to the world of Geeks!</h1>
            <div className="App">
                <Link to="/*">
                    <button>
                        Home Page
                    </button>
                </Link>
                <button onClick={() => {
                electron.filesApi.getImage()
                }}>Upload File</button>
                <div id="image_container"></div>
            </div>
        </div>
        
    )
}
 
