import { GameState } from "../interfaces/GameStateInterfaces";

export const getCellValueByTurn = (turn: GameState["turn"]): string => turn === 1 ? "X" : "O";
