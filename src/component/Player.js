import React from 'react';
import { Constants } from '../constant'
import PropTypes from 'prop-types';

export const Player = (props) => {
    return (
        <div>
            <h5>{props.name}</h5>
            <button>{Constants.PLAYER_BUTTON_TEXT}</button>
        </div>
    );
}

Player.prototype = {
    name: PropTypes.string.isRequired
}