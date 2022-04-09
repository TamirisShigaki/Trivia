import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ButtonAnswer.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddScore,
  actionDisabledAnswers, actionTimerRuning } from '../Redux/actions';

export default function ButtonAnswers(props) {
  const { answers, correct, disabledBtn } = useSelector((state) => state.answers);
  const { timerId, time, timerRunning } = useSelector((state) => state.timer);
  const { setHasClick, difficulty } = props;
  const correcAnswer = 'correct-answer';
  const [classArray, setClassArray] = useState(['', '', '', '']);
  const dispatch = useDispatch();
  useEffect(() => {
    setClassArray(['', '', '', '']);
    dispatch(actionDisabledAnswers(false));
  }, [answers, dispatch]);
  function createIndex() {
    const indexArray = [];
    let counter = 0;
    answers.forEach((item) => {
      if (item !== correct) {
        indexArray.push(`wrong-answer-${counter}`);
        counter += 1;
      } else {
        indexArray.push(correcAnswer);
      }
    });
    return indexArray;
  }

  const indexArray = createIndex();

  function setScore(answer) {
    const difficultyValue = { hard: 3, medium: 2, easy: 1 };
    if (answer === correct) {
      const magicNumber10 = 10;
      const score = magicNumber10 + (difficultyValue[difficulty] * time);
      dispatch(actionAddScore(score));
    }
  }

  function setColor(e) {
    setScore(e.target.id);
    dispatch(actionTimerRuning(false));
    const buttonColor = indexArray.map((element) => {
      if (element === correcAnswer) {
        return 'green';
      }
      return 'red';
    });
    setClassArray(buttonColor);
    setHasClick(true);
    clearInterval(timerId);
    dispatch(actionDisabledAnswers(true));
  }

  useEffect(() => {
    if (time < 1 && timerRunning === true) {
      dispatch(actionTimerRuning(false));
      const buttonColor = indexArray.map((element) => {
        if (element !== correcAnswer) {
          return 'red';
        }
        return 'green';
      });
      setClassArray(buttonColor);
      setHasClick(true);
      clearInterval(timerId);
    }
  }, [time, timerRunning, dispatch, indexArray, setHasClick, timerId]);

  return (
    <div data-testid="answer-options">
      {
        answers.map((element, ind) => (
          <button
            key={ ind }
            type="button"
            data-testid={ indexArray[ind] }
            onClick={ (e) => setColor(e) }
            className={ classArray[ind] }
            disabled={ disabledBtn }
            id={ element }
          >
            { element }
          </button>
        ))
      }
    </div>
  );
}

ButtonAnswers.propTypes = {
  setHasClick: PropTypes.func,
}.isRequired;
