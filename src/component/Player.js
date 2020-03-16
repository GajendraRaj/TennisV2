import React from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Player = (props) => {
    const { name, onUpdateScore, isGameOver } = props;

    if(isGameOver) {
        return (<h5>{props.name}</h5>);
    }

    return (
        <div>
            <h5>{name}</h5>
            <button onClick={() => onUpdateScore(name)}>{Constants.PLAYER_BUTTON_TEXT}</button>
        </div>
    );
}

Player.prototype = {
    name: PropTypes.string.isRequired,
    onUpdateScore: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
}