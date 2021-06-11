import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { PREFILE_DATA } from "../../../misc/index.js";
import { Column } from "./Column.jsx";

export const ColumnPanel = (props) => {
    const [cookies, setCookie] = useCookies(['epicgame']);
    const all_items = useSelector(state => state.all_items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookies["epicgame"]) {
            dispatch({type: PREFILE_DATA, all_items: cookies["epicgame"]});
        }        
    }, [dispatch]);
    
    useEffect(() => {
        if(all_items && all_items.length)        
            setCookie("epicgame", all_items);
    }, [all_items]);

    return <div className="col-12 row mt-4 eg-right-columnpanel">
        <Column column_name="COLUMN 1" />
        <Column column_name="COLUMN 2" />
    </div>
}