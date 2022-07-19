import { useCallback, useState } from "react";

import { initialGameState } from "../constants/initialGameState";

import { getCellValueByTurn } from "../helpers/getCellValueByTurn";
import { checkTheGame } from "../helpers/checkGame";

import { CellCoordinates, GameActions, GameState } from "../interfaces/GameStateInterfaces";

export const useGameState = (): GameState & GameActions => {
    const [matrix, setMatrix] = useState<GameState["matrix"]>(initialGameState.matrix);
    const [turn, setTurn] = useState<GameState["turn"]>(initialGameState.turn);

    const fillTheCell = useCallback((coordinates: CellCoordinates): GameState["matrix"] => {
        const { x, y } = coordinates;

        const newMatrix = [...matrix];

        const row = [...newMatrix[y]];

        row[x] = getCellValueByTurn(turn);

        newMatrix[y] = row;

        setMatrix(newMatrix);

        return newMatrix;
    }, [matrix, turn]);

    const toggleTurn = useCallback(() => {
        setTurn(prevTurn => prevTurn === 1 ? 2 : 1);
    }, []);

    const endGame = useCallback(() => {
        setTurn(initialGameState.turn);
        setMatrix(initialGameState.matrix);
    }, []);

    const makeTurn = useCallback((coordinates: CellCoordinates) => {
        const updatedMatrix = fillTheCell(coordinates);

        const gameResult = checkTheGame(updatedMatrix);

        if (gameResult.status === "win") {
            endGame();
            alert(`Player ${gameResult.symbol} wins`);
            return;
        }

        if (gameResult.status === "draw") {
            endGame();
            alert(`Draw`);
            return;
        }

        toggleTurn();
    }, [fillTheCell, endGame, toggleTurn]);

    return {
        matrix,
        turn,
        makeTurn
    };
};
