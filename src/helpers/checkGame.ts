import { GameState } from "../interfaces/GameStateInterfaces";
import { GameCheckInterface } from "../interfaces/GameCheckIntefraces";
import { GameStatus } from "../enums/GameStatus";

export const checkGame = (matrix: GameState["matrix"], direction: "x" | "y"): string => {
    const values = matrix.reduce((acc: string[], row, y) => {
        row.forEach((value, x) => {
            const coordinate = direction === "x" ? x : y;

            if (acc[coordinate] === undefined) {
                // set first value
                acc[coordinate] = !!value ? value : "";
            } else if (acc[coordinate] !== value) {
                // check value in acc don't match current value
                acc[coordinate] = "";
                // otherwise value matches the first value
            }
        });

        return acc;
    }, []);

    return values.find(value => !!value) ?? "";
};

export const checkDiagonal = (matrix: GameState["matrix"]): string => {
    const list = matrix.flat();
    let firstDiagonalSymbol = list[2];
    let secondDiagonalSymbol = list[4];

    if (!firstDiagonalSymbol || !secondDiagonalSymbol) {
        return "";
    }

    // check 2,4,6 indexes
    for (let i = 2; i < list.length - 1; i += 2) {
        firstDiagonalSymbol = list[i] === firstDiagonalSymbol ? firstDiagonalSymbol : "";
    }

    // check 0,4,8 indexes
    for (let i = 0; i < list.length; i += 4) {
        secondDiagonalSymbol = list[i] === secondDiagonalSymbol ? secondDiagonalSymbol : "";
    }

    if (firstDiagonalSymbol) {
        return firstDiagonalSymbol;
    }

    if (secondDiagonalSymbol) {
        return secondDiagonalSymbol;
    }

    return "";
};

export const checkForDraw = (matrix: GameState["matrix"]): boolean => {
    const list = matrix.flat();

    return list.every(value => !!value);
};

export const checkTheGame = (matrix: GameState["matrix"]): GameCheckInterface => {
    let winnerSymbol = "";

    winnerSymbol = checkGame(matrix, "y");

    if (winnerSymbol) {
        return { symbol: winnerSymbol, status: GameStatus.win };
    }

    winnerSymbol = checkGame(matrix, "x");

    if (winnerSymbol) {
        return { symbol: winnerSymbol, status: GameStatus.win };
    }

    winnerSymbol = checkDiagonal(matrix);

    if (winnerSymbol) {
        return { symbol: winnerSymbol, status: GameStatus.win };
    }

    if (checkForDraw(matrix)) {
        return { status: GameStatus.draw };
    }

    return { status: GameStatus.playing };
};
