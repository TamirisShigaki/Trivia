import React from 'react';
import { useSelector } from 'react-redux';

export default function GameHeader() {
  const { name, score, gravatarImage } = useSelector((state) => state.player);
  return (
    <div>
      <img
        data-testid="header-profile-picture"
        src={ gravatarImage }
        alt="user"
      />
      <span data-testid="header-player-name">{name}</span>
      <span data-testid="header-score">{score}</span>
    </div>);
}
