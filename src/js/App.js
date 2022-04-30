import React from "react";
import { Link} from "react-router-dom";

export default function App(){
    var image = electron.globalsApi.getImgSource();
    return(
        <div>
            <h1>I am App Component</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('My custom notification!')
            }}>Notify</button>
            <h2>File Upload in Electron</h2>
            <button onClick={() => {
                electron.filesApi.getImage()
            }}>Upload File</button>
            <div id="image_container"></div>
            <img src={image}/>
            <button onClick={() =>
                electron.modelsApi.boundaryBox()
            }>Draw Boundary Box</button>
            <div className="App">
                <Link to="/nextpage">
                    <button onClick={() =>
                        electron.nextPageApi.nextPage()
                    }>Next Page</button>
                </Link>  
            </div>
             
        </div>
    )
}



