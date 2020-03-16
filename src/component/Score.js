import React, { useState } from 'react';
import { Constants } from '../constant'

export const Score = () => {
    const [score, setScore] = useState(Constants.INITIAL_SCORE);

    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
            <label>{score}</label>
        </div>
    );
}