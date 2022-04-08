import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ButtonAnswer.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionTimerRuning } from '../Redux/actions';

export default function ButtonAnswers(props) {
  const { answers, correct, disabledBtn } = useSelector((state) => state.answers);
  const { timerId } = useSelector((state) => state.timer);
  const { setHasClick } = props;
  const [classArray, setClassArray] = useState(['', '', '', '']);
  const dispatch = useDispatch();
  useEffect(() => {
    setClassArray(['', '', '', '']);
  }, [answers]);
  function createIndex() {
    const indexArray = [];
    let counter = 0;
    answers.forEach((item) => {
      if (item !== correct) {
        indexArray.push(`wrong-answer-${counter}`);
        counter += 1;
      } else {
        indexArray.push('correct-answer');
      }
    });
    return indexArray;
  }

  const indexArray = createIndex();

  function setColor() {
    dispatch(actionTimerRuning(false));
    const buttonColor = indexArray.map((element) => {
      if (element === 'correct-answer') {
        return 'green';
      }
      return 'red';
    });
    setClassArray(buttonColor);
    setHasClick(true);
    clearInterval(timerId);
  }

  return (
    <div data-testid="answer-options">
      {
        answers.map((element, ind) => (
          <button
            key={ ind }
            type="button"
            data-testid={ indexArray[ind] }
            onClick={ () => setColor() }
            className={ classArray[ind] }
            disabled={ disabledBtn }
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
