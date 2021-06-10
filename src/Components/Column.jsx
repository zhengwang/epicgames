import React from "react";
import { Item } from "./Item.jsx";

export const Column = (props) => {
    const { title, itemlist } = props;
    console.log(itemlist);

    return <>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 eg-column">
            <div className="eg-topbar">
                <label className="lbl">{title}</label>
            </div>
            {
                itemlist && itemlist.map((item, idx) => {
                    return <Item title={item} idx={idx}/>
                })
            }
        </div>
    </>
}