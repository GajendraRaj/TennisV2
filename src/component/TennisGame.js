import React from 'react';
import { Player } from './Player';
import { Constants } from '../constant';
import { Score } from './Score';

export const TennisGame = () => {
    return (
        <div>
            <div>
                <Player name={Constants.PLAYER1_NAME} />
                <Player name={Constants.PLAYER2_NAME} />
            </div>
            <div>
                <Score />  
            </div>
        </div>

    );
}
