import React from 'react';
import { Link} from "react-router-dom";

function SelectFace(props){
    return(
        <img src={props.image}/>
    )
}

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
                <div id="faces_container"></div>
                <SelectFace image={face}/>
            </div>
        </div>
        
    )
}
 
