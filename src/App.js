import React from 'react';
import './App.css';
import CellGrid from "./CellGrid";

function App() {
  return (
      <>
    <div className="App">
      <CellGrid/>
    </div>
      <div className="App">
      <CellGrid/>
      </div>
  <div className="App">
    <CellGrid/>
  </div>
        </>
  );
}

export default App;
