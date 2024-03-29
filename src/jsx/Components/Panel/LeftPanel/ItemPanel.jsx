import React from "react";
import { SelectControl } from "./SelectControl.jsx";
import { useFormik } from 'formik';
import { connect, useDispatch, useSelector, useStore } from 'react-redux'
import { ADD_ITEM, FILTER_ITEM } from "../../../misc/index.js";

export const ItemPanel = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik(
        {
            initialValues: {
                item_name: "",
                column_name: ""
            },
            enableReinitialize: true,
            onSubmit: values => {                
                dispatch({
                    type: ADD_ITEM,
                    column_name: values.column_name,
                    item_name: values.item_name
                });
                formik.resetForm();
            },
            validate: values => {
                const errors = {};
                if (!values.item_name) {
                    errors.item_name = "Please enter an item name.";
                }

                if (!values.column_name) {
                    errors.column_name = "Please select a column.";
                }
                return errors;
            }
        }
    );
    return <>
        <div className="col-12 mt-4 eg-left-itempanel">
            <form onSubmit={formik.handleSubmit}>
                <div className="eg-additem-control">
                    <input type="text"
                        className="eg-input"
                        placeholder="ENTER ITEM"
                        name="item_name"
                        value={formik.values.item_name}
                        onChange={formik.handleChange}
                        autoComplete="none"
                        maxLength="20"
                    />
                    {formik.errors.item_name && formik.touched.item_name && <div className="eg-error">{formik.errors.item_name}</div>}

                    <SelectControl formik={formik} />

                    <button type="submit" className="eg-btn-additem">
                        ADD ITEM
                    </button>
                </div>
            </form>
            <div className="eg-search-control">
                <label className="eg-lbl-search">SEARCH AN ITEM</label>
                <input className="eg-search" placeholder="SEARCH ITEM" onChange={e => {
                    // console.log(e.target.value);
                    const item_name = e.target.value;
                    dispatch({type: FILTER_ITEM, item_name});
                }} />
            </div>
        </div>
    </>
}