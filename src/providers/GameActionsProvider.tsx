import { createContext, useContext } from "react";

import { initialGameActions } from "../constants/initialGameState";

import { GameActions } from "../interfaces/GameStateInterfaces";

const GameActionsContext = createContext<GameActions>(initialGameActions);

export default GameActionsContext;

export const useGameActionsContext = () => useContext(GameActionsContext);

