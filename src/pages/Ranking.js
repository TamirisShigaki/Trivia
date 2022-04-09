import React from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const ranking = JSON.parse(localStorage.ranking);
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      {
        ranking.map((item, index) => (
          <div key={ index }>
            <span data-testid={ `player-name-${index}` }>{item.name}</span>
            <span data-testid={ `player-score-${index}` }>{item.score}</span>
            <img src={ item.picture } alt="player" />
          </div>
        ))
      }
      <Link to="/">
        <button
          type="button"
          data-testid="btn-go-home"
        >
          Jogar novamente
        </button>
      </Link>
    </div>
  );
}
