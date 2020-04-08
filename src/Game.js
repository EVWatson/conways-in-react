import React from "react";
import CellGrid from "./CellGrid";

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cellGrid">

                <CellGrid />

            </div>
        )
    }

}

export default Game;
