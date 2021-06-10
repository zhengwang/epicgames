import React from "react";
import ReactDOM from "react-dom";
import {Splash} from "./Splash/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const renderApp = () => {
    ReactDOM.render(<Splash />, document.getElementById('app'));
};

document.addEventListener("DOMContentLoaded", ()=> {
    renderApp();
});