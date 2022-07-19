import React, { FC, createContext, ReactNode, useContext, useMemo } from "react";

import GameActionsContext from "./GameActionsProvider";

import { useGameState } from "../hooks/useGameState";

import { initialGameState } from "../constants/initialGameState";

import { GameActions, GameState } from "../interfaces/GameStateInterfaces";

interface Props {
    children: ReactNode;
}

const GameStateContext = createContext<GameState>(initialGameState);

const GameStateProvider: FC<Props> = props => {
    const { children } = props;

    const { matrix, turn, makeTurn } = useGameState();

    const state: GameState = useMemo(() => ({
        matrix,
        turn
    }), [matrix, turn]);

    const actions: GameActions = useMemo(() => ({
        makeTurn
    }), [makeTurn]);

    return (
        <GameStateContext.Provider value={state}>
            <GameActionsContext.Provider value={actions}>
                {children}
            </GameActionsContext.Provider>
        </GameStateContext.Provider>
    );
};

export default GameStateProvider;

export const useGameStateContext = () => useContext(GameStateContext);

