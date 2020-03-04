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

// const totalCells = (rows, columns) => {
//     let cells = [];
//     for (let i = 0; i < rows * columns; i++) {
//         cells.push(
//             <Cell key={i}/>
//         )
//     }
//     return cells;
// };

const CellGrid = (rows, columns) => {
    let grid = [];
    let row = new Array(2);
    for (let i = 0; i < row.length; i++) {
        for (let column = 0; column < 3; column++){
        grid.push(<div key={column+1}>{<Cell key={row}/>}</div>)
        }
    }
   return grid;
};


export default CellGrid;
