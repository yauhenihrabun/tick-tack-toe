import React, { FC, memo } from "react";

import { useGameActionsContext } from "../../providers/GameActionsProvider";

import { CellCoordinates } from "../../interfaces/GameStateInterfaces";

type Props = CellCoordinates & {
    value: string;
}

const Cell: FC<Props> = memo(props => {
    const { x, y, value } = props;

    const { makeTurn } = useGameActionsContext();

    return (
        <button onClick={() => makeTurn({ x, y })} disabled={!!value}>
            {value}
        </button>
    );
});

export default Cell;
