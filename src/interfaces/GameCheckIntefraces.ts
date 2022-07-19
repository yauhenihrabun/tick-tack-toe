import { GameStatus } from "../enums/GameStatus";

export interface GameCheckInterface {
    symbol?: string;
    status: GameStatus;
}
