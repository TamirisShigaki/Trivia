import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisabledAnswers, actionTimerRuning } from '../Redux/actions';

export default function Timer() {
  const time = 30;
  const [seconds, setSeconds] = useState(time);
  const { timerRunning } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    const second = 1000;
    const interval = setTimeout(() => {
      const clear = () => {
        clearInterval(interval);
        dispatch(actionTimerRuning(false));
      };
      if (!timerRunning) {
        clear();
        return;
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (seconds === 1) {
          clear();
        }
        return;
      }
      clear();
    }, second);
  });

  useEffect(() => {
    if (seconds === 0) {
      dispatch(actionDisabledAnswers(true));
    }
  }, [seconds, dispatch]);
  return (
    <span>
      {seconds}
    </span>);
}
