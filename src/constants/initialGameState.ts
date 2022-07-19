import { GameActions, GameState } from "../interfaces/GameStateInterfaces";

export const initialGameState: GameState = {
    matrix: [["", "", ""], ["", "", ""], ["", "", ""]],
    turn: 1
};

export const initialGameActions: GameActions = {
    makeTurn: () => {
    }
};
