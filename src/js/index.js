import React from "react";
import ReactDom from "react-dom";
import {MemoryRouter as Router, Routes, Route} from "react-router-dom";

import App from "./App";
import SelectFaceScreen from "./SelectFaceScreen";
import EditScreen from "./EditScreen";
import LoadingScreen from "./LoadingScreen";
import './index.scss';

ReactDom.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/*" element={<App/>}></Route>
                <Route exact path="/selectface" element={<SelectFaceScreen/>}/>
                <Route exact path="/editscreen" element={<EditScreen/>}/>
                <Route exact path="/loadingscreen" element={<LoadingScreen/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
    , document.getElementById('root'))

