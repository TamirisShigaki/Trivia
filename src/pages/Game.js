import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getQuestion } from '../Redux/actions';
import Questions from '../component/Questions';

export default function Game(props) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  useEffect(() => {
  }, [token]);
  async function handleBtmclick() {
    dispatch(getToken());
    const { history: { push } } = props;
    push('/game');
  }

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
