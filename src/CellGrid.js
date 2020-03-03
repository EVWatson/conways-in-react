import React from "react";
import Cell from "./Cell";

const CellGrid = (props) => {
    let array = [];
    for (let i = 0; i < 3; i++){
        array.push(<Cell/>);
    }
    return array;
};

export default CellGrid;
