import React from "react";
import ReactDom from "react-dom";
import { MemoryRouter as Router,Routes,Route } from "react-router-dom";

import App from "./App";
import NextPage from "./NextPage";
import './index.scss';

ReactDom.render(
<React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={ <App /> }></Route>
        <Route exact path="/nextpage" element={<NextPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
  , document.getElementById('root'))

