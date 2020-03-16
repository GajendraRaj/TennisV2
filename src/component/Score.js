import React, { useState, useEffect } from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Score = (props) => {
    const SCORE_LOOKUP = ["Love", "Fifteen"];
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score } = props;

    useEffect(() => {
        const gameScore = () => {
            if(player1Score === 1) {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[0]; 
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