import React, { FC } from "react";

import Cell from "../Cell/Cell";

import "./Board.scss";

import { useGameStateContext } from "../../providers/GameStateProvider";

const Board: FC = () => {
    const { matrix, turn } = useGameStateContext();

    return (
        <section className="game-wrapper">
            <header>
                {turn === 1 ? "Player X" : "Player O"}
            </header>
            <div className="board">
                {matrix.map((row, y) => (
                    row.map((value, x) => (
                        <Cell
                            key={`${y}-${x}`}
                            y={y}
                            x={x}
                            value={value}
                        />
                    ))))}
            </div>
        </section>
    );
};

export default Board;
