import React from "react";
import { useSelector } from "react-redux";
import { Item } from "./Item.jsx";

export const Column = (props) => {
    const { column_name } = props;
    const itemlist = useSelector(state => state.all_items.filter(item => item.column_name === column_name));
    // console.log(itemlist);

    return <>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 eg-column">
            <div className="eg-topbar">
                <label className="lbl">{column_name}</label>
            </div>
            {
                itemlist && itemlist.map((item, idx) => {
                    return <Item item={item}
                        idx={idx} key={idx} />
                })
            }
        </div>
    </>
}