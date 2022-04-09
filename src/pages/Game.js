import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../components/Questions';
import GameHeader from '../components/GameHeader';
/* import Feedback from './Feedback'; */
export default function Game() {
  return (
    <div>
      GAME
      <GameHeader />
      <Questions />
    </div>);
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
