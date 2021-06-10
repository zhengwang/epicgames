import React from "react";
import { SelectControl } from "./SelectControl.jsx";

export const ItemPanel = (props) => {
    return <>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 eg-left-itempanel">
            <div className="eg-additem-control">
                <input type="text" className="eg-input" placeholder="ENTER ITEM" />            
                <SelectControl />
            </div>
            <div className="eg-search-control">
                <button className="eg-btn-additem">ADD ITEM</button>
                <br/>
                <label className="eg-lbl-search mt-5">SEARCH AN ITEM</label>
                <input className="eg-search" placeholder="SEARCH ITEM"/>
            </div>
        </div>
    </>
}