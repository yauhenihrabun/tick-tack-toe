import React from "react";

import GameStateProvider from "./providers/GameStateProvider";
import Board from "./components/Board/Board";

import "./App.css";

function App() {
    return (
        <div className="App">
            <GameStateProvider>
                <Board />
            </GameStateProvider>
        </div>
    );
}

export default App;
