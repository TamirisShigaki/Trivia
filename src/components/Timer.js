import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Timer() {
  const time = 30;
  const [seconds, setSeconds] = useState(time);
  const { timerRunning } = useSelector((state) => state.questions);

  useEffect(() => {
    const second = 1000;
    const interval = setTimeout(() => {
      if (!timerRunning) {
        clearInterval(interval);
        return;
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (seconds === 1) {
          clearInterval(interval);
        }
        return;
      }
      clearInterval(interval);
    }, second);
  });

  return (
    <span>
      {seconds}
    </span>);
}
