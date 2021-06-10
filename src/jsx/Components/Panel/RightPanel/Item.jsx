import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DEL_ITEM } from "../../../misc";

export const Item = (props) => {    
    const { item, idx } = props;
    const clsname = idx % 2 === 0 ? "even" : "odd";    
    const dispatch = useDispatch();    

    const handleClick = e => {
        dispatch({type: DEL_ITEM, item: item});
    }

    return <div className={`eg-item ${clsname}`}>
        <label className="lbl">{item.item_name}</label>
        
        {dispatch && <img src={idx % 2 === 0 ? "assets/images/plus-black.svg" : "assets/images/plus-white.svg"} className="eg-close-btn" 
        onClick={handleClick} />}
    </div>
}