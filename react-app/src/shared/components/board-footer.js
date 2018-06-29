import React from 'react';

import { gameState } from '../../constants';

export default function BoardFooter(props){
    const { notStarted, pending } = gameState;
    return (
        <div className="mdl-card__actions mdl-card--border">
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                onClick={props.onGetStartedCallback}>
                Get Started
            </button>
        </div>
    )
}