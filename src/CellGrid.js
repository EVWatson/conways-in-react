import React from "react";
import Cell from "./Cell";


const CellGrid = (props) => {
    let key = 0;
    let row = [];

    for (let i = 0; i < props.columns; i++) {

        row.push(<Cell key={i}/>)
    }
    return Array(props.rows)
        .fill(row)
        .map(() =>
            <div
                key={key = key+1}
                className={"row"}
            >
                {row}
            </div>);
};


export default CellGrid;
