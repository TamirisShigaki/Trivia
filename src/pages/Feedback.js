import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Feedback() {
  const { name, score, gravatarImage } = useSelector((state) => state.player);

  // function handleBtnRanking() {
  //   const { history: { push } } = props;
  //   push('/ranking');
  // }

  return (
    <>
      <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarImage }
          alt="user"
        />
        <span data-testid="header-player-name">{name}</span>
        <span data-testid="header-score">{score}</span>
      </header>

      <Link to="/ranking">
        <button
          type="button"
          data-testid="btn-ranking"
          // onClick={ handleBtnRanking }
        >
          Ranking
        </button>
      </Link>

    </>
  );
}

// Feedback.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;
