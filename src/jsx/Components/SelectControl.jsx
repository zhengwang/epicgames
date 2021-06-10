import React, { useState } from "react";

export const SelectControl = (props) => {
    const [open, setOpen] = useState(false);



    return <div className="eg-select mt-4">
        <div className="row align-items-center eg-select-default-item"
            onClick={e => { setOpen(!open) }}>
            <div className="col-8">
                <label>CHOOSE COLUMN</label>
            </div>
            <div className="col-4 eg-select-arrow">
                {open ? <img src="assets/images/arrow-up.svg" /> : <img src="assets/images/arrow-down.svg" />}
                {}
            </div>
        </div>

        {open && ["COLUMN 1", "COLUMN 2"].map((item, idx) => {
            return <div className={`row align-items-center eg-select-item ${idx===0 ? "" : "mt-1"}`}>
            <div className="col-8">
                <label>{item}</label>
            </div>
        </div>
        })}
    </div>
}