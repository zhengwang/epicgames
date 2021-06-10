import React from "react";
import ReactDOM from "react-dom";
import { Splash } from "./Splash/index.jsx";
import { HashRouter as Router, Route } from "react-router-dom";
import "../scss/App.scss";

const renderApp = () => {
    ReactDOM.render(<Router>
        <Route exact path="/" component={Splash} />        
    </Router>,
        document.getElementById('app'));
};

document.addEventListener("DOMContentLoaded", () => {
    renderApp();
});