import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisabledAnswers, actionSetTimerId, actionTimer } from '../Redux/actions';

export default function Timer() {
  const { time, timerId } = useSelector((state) => state.timer); // userSelector puxa a informação do estado global
  const dispatch = useDispatch();
  useEffect(() => {
    if (timerId === undefined) { // evita multiplos setInterval
      const second = 1000;
      const interval = setInterval(() => {
        dispatch(actionTimer());
      }, second);
      dispatch(actionSetTimerId(interval));
    }
  }, [timerId, dispatch]);

  useEffect(() => {
    if (time < 1) {
      clearInterval(timerId);
    }
  }, [time, timerId]);

  useEffect(() => {
    if (time === 0) {
      dispatch(actionDisabledAnswers(true));
    }
  }, [time, dispatch]);
  return (
    <span>
      {time}
    </span>);
}
