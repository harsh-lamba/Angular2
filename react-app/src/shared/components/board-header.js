import React from 'react';
import { gameState } from '../../constants';

export default function BoardHeader(props){
    const { notStarted, pending} = gameState;
    const headerClass = props.gameState === gameState.notStarted ?
        'mdl-card--expand' : '';
    return (
        <div className={`mdl-card__title ${headerClass}`}>
            {
                props.gameState === notStarted && 
                <h2 className="mdl-card__title-text">
                    Welcome to Tic Tac game
                </h2>
            }
            {
                props.gameState === pending && 
                <h2 className="mdl-card__title-text">
                    <span className="mdl-chip">
                        <span className="mdl-chip__text">Basic Chip</span>
                    </span>
                </h2>
            }
        </div>
    )
}