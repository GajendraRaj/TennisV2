import React from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Player = (props) => {
    const { name, onUpdateScore } = props;
    return (
        <div>
            <h5>{name}</h5>
            <button onClick={() => onUpdateScore(name)}>{Constants.PLAYER_BUTTON_TEXT}</button>
        </div>
    );
}

Player.prototype = {
    name: PropTypes.string.isRequired,
    onUpdateScore: PropTypes.func.isRequired
}