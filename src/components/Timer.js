import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisabledAnswers, actionSetTimerId, actionTimer } from '../Redux/actions';

export default function Timer() {
  const { time } = useSelector((state) => state.timer); // userSelector pusa a informação do estado
  const [intervalId, setIntervalId] = useState(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    if (intervalId === undefined) { // evita multiplos setInterval
      const second = 1000;
      const interval = setInterval(() => {
        dispatch(actionTimer());
      }, second);
      dispatch(actionSetTimerId(interval));
      setIntervalId(interval);
    }
  }, [setIntervalId, intervalId, dispatch]);

  useEffect(() => {
    if (time < 1) {
      clearInterval(intervalId);
    }
  }, [time, intervalId]);

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
