import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Ranking() {
//   function handleBtnLogin() {
//     const { history: { push } } = props;
//     push('/');
//   }

  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>

      <Link to="/">
        <button
          type="button"
          data-testid="btn-go-home"
        // onClick={ handleBtnLogin }
        >
          Jogar novamente
        </button>
      </Link>
    </div>
  );
}

// Ranking.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;
