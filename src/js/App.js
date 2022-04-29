import React from "react";
import { Link} from "react-router-dom";
import SelectFace from "./SelectFace";

export default function App(){
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
            <button onClick={() =>
                electron.modelsApi.boundaryBox()
            }>Draw Boundary Box</button>
            <SelectFace/>
            <button onClick={() =>
                electron.nextPageApi.nextPage()
            }>Next Page</button>
            <div className="App">
                <Link to="/nextpage">
                    <button>Next Page</button>
                </Link>  
            </div>
             
        </div>
    )
}



