import React, { useState } from "react";

export const SelectControl = (props) => {
    const { formik } = props;
    const [open, setOpen] = useState(false);
    const [columnName, setColumnName] = useState(!formik.values.column_name ? "CHOOSE COLUMN" : formik.values.column_name);

    return <div className="eg-select mt-4">        
        <div className="row align-items-center eg-select-default-item"
            onClick={e => { 
                setOpen(!open);
                formik.setFieldError("column_name", "");
            }}>
            <div className="col-8">
                <label>{columnName}</label>
            </div>
            <div className="col-4 eg-select-arrow">
                {open ? <img src="assets/images/arrow-up.svg" /> : <img src="assets/images/arrow-down.svg" />}                
            </div>
        </div>
        {formik.errors.column_name && formik.touched.item_name && <div className="eg-error">{formik.errors.column_name}</div>}

        {open && ["COLUMN 1", "COLUMN 2"].map((item, idx) => {
            return <div className={`row align-items-center eg-select-item ${idx === 0 ? "" : "mt-1"}`} onClick = {e => {
                    const col_name = `COLUMN ${idx+1}`;
                    setColumnName(col_name);
                    setOpen(!open);
                    formik.setFieldValue("column_name", col_name);
                }}>
                <div className="col-8">
                    <label>{item}</label>
                </div>
            </div>
        })}
    </div>
}