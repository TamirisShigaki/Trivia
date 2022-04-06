import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../component/Questions';
import GameHeader from '../components/GameHeader';

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
