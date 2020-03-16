import React, { useState, useEffect } from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Score = (props) => {
    const SCORE_LOOKUP = ["Love", "Fifteen", "Thirty", "Forty"];
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score, player2Score } = props;

    useEffect(() => {
        const gameScore = () => {
            if(player1Score === 1 || player1Score === 2 || player1Score === 3) {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score]; 
            } else if(player2Score === 1) {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score];
            } else {
                return 'Love all';
            }
        };

        setScore(gameScore);
    }, [player1Score, SCORE_LOOKUP]);

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