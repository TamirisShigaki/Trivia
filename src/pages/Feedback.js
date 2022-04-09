import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GameHeader from '../components/GameHeader';

export default function Feedback() {
  const { assertions, score, name, gravatarImage } = useSelector((state) => state.player);

  /* [
  { name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar }
] */

  function saveLocalStorage() {
    console.log('aqui');
    if (localStorage.ranking) {
      const aux = JSON.parse(localStorage.ranking);
      aux.push({ name, score, picture: gravatarImage });
      localStorage.ranking = JSON.stringify(aux);
    } else {
      localStorage.ranking = JSON.stringify([{ name, score, picture: gravatarImage }]);
    }
  }
  const magicNumber3 = 3;
  return (
    <div>
      <GameHeader />
      {/* <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarImage }
          alt="user"
        />
        <span data-testid="header-player-name">{name}</span>
        <span data-testid="header-score">{score}</span>
      </header> */}
      <h2 data-testid="feedback-text">
        {assertions >= magicNumber3
          ? 'Well Done!' : 'Could be better...'}
      </h2>
      <section>
        <h3>
          Placar final:
          {' '}
          <span data-testid="feedback-total-score">{Number(score)}</span>
          {' '}
          pontos
        </h3>
        <h3>
          Total de perguntas corretas:
          {' '}
          <span data-testid="feedback-total-question">{assertions}</span>
          {' '}
        </h3>
      </section>
      <section />

      <Link to="/ranking">
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ saveLocalStorage }
        >
          Ranking
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          id="button-play-again"
          data-testid="btn-play-again"
        >
          Play Again
        </button>
      </Link>

    </div>
  );
}
