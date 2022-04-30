import React from 'react';
import { Link} from "react-router-dom";
import SelectFace from "./SelectFace";

 export default function NextPage (){
    var face = electron.globalsApi.getImgSource();
    return (
        <div className='App'>
            <h1>Welcome to the world of Geeks!</h1>
            <div className="App">
                <Link to="/*">
                    <button>
                        Home Page
                    </button>
                </Link>
                <SelectFace image={face}/>
            </div>
        </div>
        
    )
}
 
