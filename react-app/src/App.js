import React, { Component } from 'react';
import Welcome from './feature/welcome/welcome.js';
import BoardHeader from './shared/components/board-header';
import BoardFooter from './shared/components/board-footer';
import './App.scss';

class App extends Component {
  state={
    gameState : 'notStarted'
  }
  render() {
    const notStartedGameState = 'notStarted';
    const pendingGameState = 'pending';

    return (
      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--4-col'></div>
        <div className='mdl-cell mdl-cell--4-col'>
          <div className='mdl-card mdl-shadow--2dp tic-tac-wrapper tic-tac-wrapper--background-color'>
            <BoardHeader
              gameState={this.state.gameState}
              />
            <BoardFooter
              gameState = {this.state.gameState}
              onGetStartedCallback = {this.getStarted}
              />
          </div>
        </div>
        <div className='mdl-cell mdl-cell--4-col'></div>
      </div>
    );
  }

  getStarted = () => {
    this.setState({
      gameState: 'pending'
    })
  }
}

export default App;
