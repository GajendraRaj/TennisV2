import React, { useState } from 'react';
import { Player } from './Player';
import { Constants } from '../constant';
import { Score } from './Score';

export const TennisGame = () => {
    const state = {
        player1Score: 0,
        player2Score: 0
    }
    const [score, setScore] = useState(state);

    const updateScore = (player) => {
        if(player === 'Player 1') {
            setScore(prevState => ({
                ...prevState,
                player1Score: prevState.player1Score + 1
            }));
        }
    }

    return (
        <div>
            <div>
                <Player name={Constants.PLAYER1_NAME} onUpdateScore={updateScore} />
                <Player name={Constants.PLAYER2_NAME} onUpdateScore={updateScore} />
            </div>
            <div>
                <Score player1Score={score.player1Score} />  
            </div>
        </div>

    );
}
