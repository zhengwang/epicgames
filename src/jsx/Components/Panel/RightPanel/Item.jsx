import React from "react";

export const Item = (props) => {

    const { title, idx } = props;
    const clsname = idx % 2 === 0 ? "even" : "odd";

    const handleClick = e => {

    }

    return <div className={`eg-item ${clsname}`}>
        <label className="lbl">{title}</label>
        {/* {idx % 2 === 0 && <img src="assets/images/plus-black.svg" className="eg-close-btn" onClick={handleClick}/>}
        {idx % 2 !== 0 && <img src="assets/images/plus-white.svg" className="eg-close-btn" />} */}
        <img src={idx % 2 === 0 ? "assets/images/plus-black.svg" : "assets/images/plus-white.svg"} className="eg-close-btn" onClick={handleClick} />
    </div>
}