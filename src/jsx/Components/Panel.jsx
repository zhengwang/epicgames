import React from "react";
import { ColumnPanel, ItemPanel } from "./Panel";

export const Panel = (props) => {
    return <>
        <div className="row eg-panel">
            <div className="col-12">
                <button className=" eg-title">Add An Item</button>
            </div>
        </div>
        <div className="row justify-content-between">
            <ItemPanel />
            <ColumnPanel />
        </div>
    </>
}