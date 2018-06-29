import React from 'react';
import './welcome.scss';

export default function Welcome(props){
    return (
        <div className='mdl-card mdl-shadow--2dp welcome'>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Welcom to Tic Tac World</h2>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
                    Get Started
                </a>
            </div>
        </div>
    );
}