import React from "react";
import Cell from "./Cell";

// const createRow = (props) => {
//     let row = [];
//     for (let i = 0; i < props; i++){
//         row.push(
//             <Cell key={i}/>
//             )
//     }
//     return row;
// };
//
// const CellGrid = (props) => {
//     let grid = [];
//     for (let i = 0; i < 3; i++){
//         grid.push(
//             <div key={i} className={"row"}>
//             {createRow(3)}
//         </div>);
//     }
//     return grid;
// };



// const CellGrid = (rows, columns) => {
//    const row = [];
//    row.fill(<Cell />, 0, 3);
//
//    let grid = [];
//
//    for (let i = 0; i < 3; i++) {
//        grid.push(<div key={i}>{row}</div>);
//    }
//
//     return grid;
// };

const CellGrid = (rows, columns) => {
    let grid = [];
    let row = [<Cell/>];

    for (let i = 0; i > 3; i++) {
        grid.push(<div>{[row}</div>]);
    }
    return grid;
};



export default CellGrid;
