import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Feedback() {
  const { name, score, gravatarImage } = useSelector((state) => state.player);
  return (
    <div>
      <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarImage }
          alt="user"
        />
        <span data-testid="header-player-name">{name}</span>
        <span data-testid="header-score">{score}</span>
      </header>
      <section>
        <h2>
          Placar final:
        </h2>
        <p data-testid="feedback-total-score">{}</p>
        <h3>
          Total de perguntas corretas:
        </h3>
        <p data-testid="feedback-total-question">{}</p>
      </section>
      <section />
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
