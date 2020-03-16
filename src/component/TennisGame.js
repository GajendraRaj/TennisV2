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
    const [isGameOver, setIsGameOver] = useState(false);

    const updateScore = (player) => {
        if(player === 'Player 1') {
            setScore(prevState => ({
                ...prevState,
                player1Score: prevState.player1Score + 1
            }));
        } else {
            setScore(prevState => ({
                ...prevState,
                player2Score: prevState.player2Score + 1
            }));                
        }
    }

    const gameOverNotification = () => {
        setIsGameOver(true);
    }

    const resetGame = () => {
        setScore(state);
        setIsGameOver(false);
    }

    return (
        <div>
            <div className="playerContainer">
                <div className="leftContainer">
                    <Player name={Constants.PLAYER1_NAME} onUpdateScore={updateScore} isGameOver={isGameOver} />
                </div>
                <Player name={Constants.PLAYER2_NAME} onUpdateScore={updateScore} isGameOver={isGameOver} />
            </div>
            <div>
                <Score player1Score={score.player1Score} player2Score={score.player2Score} onGameOverNotification={gameOverNotification} />
                <br /><button onClick={resetGame}>{Constants.RESET_BUTTON_TEXT}</button>  
            </div>
        </div>

    );
}
