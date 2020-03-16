import React, { useState, useEffect } from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Score = (props) => {
    const SCORE_LOOKUP = ["Love", "Fifteen", "Thirty", "Forty"];
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score, player2Score } = props;
    
    useEffect(() => {
        const gameScore = () => {
            const isPlayersScoreEqual = player1Score === player2Score;
            const isDeuce = player1Score >= 3;
            const isPlayerScoredMorethanLookUpScore = player1Score > 3 || player2Score > 3;
            const isAdvantage = Math.abs(player1Score - player2Score) === 1;
            const player = player1Score > player2Score ? Constants.PLAYER1_NAME : Constants.PLAYER2_NAME;

            if(isPlayersScoreEqual) {
                if(isDeuce) {
                    return Constants.DEUCE;
                }
                return SCORE_LOOKUP[player1Score] + ' all';
            } else if(isPlayerScoredMorethanLookUpScore) {
                if(isAdvantage) {
                    return `Advantage ${player}`;
                }
            } else {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score];
            }
        };

        setScore(gameScore);
    }, [player1Score, player2Score, SCORE_LOOKUP]);

    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
            <label>{score}</label>
        </div>
    );
}

Score.prototype = {
    player1Score: PropTypes.number.isRequired
}