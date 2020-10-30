import React from "react";
import CellGrid from "./CellGrid";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            gridValues: {
                rows: 0,
                columns: 0
            }
        };

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            gridValues: {
                rows: e.target.value,
                columns: e.target.value
            }
        });
    }


    handleSubmit(e)  {
        e.preventDefault();
        console.log(this.state.gridValues)
    }

    render() {
        const rows = this.state.gridValues.rows;
        const columns = this.state.gridValues.columns;

        return (
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Enter number of rows:
                            <input
                                name={"rows"}
                                type={"number"}
                                value={rows["rows"]}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label>
                            Enter number of columns:
                            <input
                                name={"columns"}
                                type={"number"}
                                value={columns["columns"]}
                                onChange={this.handleChange}
                            />
                        </label>
                            <input type={"submit"} value={"Create Grid"} />
                    </form>
                </div>

                <div className="cellGrid">

                    <CellGrid rows={rows} columns={columns}/>

                </div>
            </>
        )
    }

}

export default Game;
