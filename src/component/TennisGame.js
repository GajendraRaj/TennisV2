import React from 'react';
import { Player } from './Player';
import { Constants } from '../constant';

export const TennisGame = () => {
    return (
        <div>
            <Player name={Constants.PLAYER1_NAME} />
            <Player name={Constants.PLAYER2_NAME} />
        </div>
    );
}
