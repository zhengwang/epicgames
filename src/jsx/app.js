import React from "react";
import ReactDOM from "react-dom";
import { Splash } from "./Splash/index.jsx";
import { HashRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "../scss/App.scss";
import { rootReducer } from "./misc/index.js";

const store = createStore(rootReducer);

const renderApp = () => {
    ReactDOM.render(<Provider store={store}>
        <Router>
            <Route exact path="/" component={Splash} />
        </Router></Provider>,
        document.getElementById('app'));
};

document.addEventListener("DOMContentLoaded", () => {
    renderApp();
});