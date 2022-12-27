import React from "react";
import Board from "./components/Board"
import "./styles/root.scss"

const App = () => {
    return  (
        //  React Fragment <> </> 
        //  React Fragment <React.Fragment> </React.Fragment> 
      <div className="app"> 
        <h4>TIC TAC TOE</h4>
        <Board />
      </div>
    );
}

export default App;
