import React from "react";
import { useCookies } from "react-cookie";
import { Header } from "../Components/Header.jsx";
import { Panel } from "../Components/Panel.jsx";

export const Splash = (props) => {

    return <div className="container">
        <Header />
        <Panel />
    </div>
}