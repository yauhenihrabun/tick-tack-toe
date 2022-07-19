export interface CellCoordinates {
    x: number;
    y: number;
}

export interface GameState {
    matrix: string[][];
    turn: number;
}

export interface GameActions {
    makeTurn: (coordinates: CellCoordinates) => void,
}
