import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../component/Questions';

export default function Game() {
  return (
    <div>
      GAME
      <Questions />
    </div>);
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
