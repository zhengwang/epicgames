import React from "react";
import { ColumnPanel } from "./ColumnPanel.jsx";
import { ItemPanel } from "./ItemPanel.jsx";

export const Panel = (props) => {
    return <>
        <div className="row">
            <div className="col-12">
                <button className=" eg-title">Add An Item</button>
            </div>
        </div>
        <div className="row eg-itempanel">
            <ItemPanel />
            <ColumnPanel />
        </div>
    </>
}