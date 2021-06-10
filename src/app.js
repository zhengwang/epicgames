import React from "react";
import ReactDOM from "react-dom";
import {Splash} from "./Splash/index.jsx";
import "./App.css";

const renderApp = () => {
    ReactDOM.render(<Splash />, document.getElementById('app'));
};

document.addEventListener("DOMContentLoaded", ()=> {
    renderApp();
});