import React from "react";
import { Column } from "./Column.jsx";

export const ColumnPanel = (props) => {
    return <>
        <Column title="COLUMN 1" itemlist={[
            "ITEM 1", "ITME2", "ITEM 1", "ITME2", "ITEM 1", "ITME2", "ITME2"]}/>
        <Column title="COLUMN 2" itemlist={["ITME2", "ITEM 1", "ITME2", "ITME2"]}/>
    </>
}