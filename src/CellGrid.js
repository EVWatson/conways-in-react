import React from "react";
import Cell from "./Cell";


const CellGrid = (rows, columns) => {
    let key = 0;
    let row = [];

    for (let i = 0; i < 3; i++) {

        row.push(<Cell key={i}/>)
    }
    return Array(3)
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
