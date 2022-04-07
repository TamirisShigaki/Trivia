import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonAnswers(props) {
  console.log(props, 'props');
  const { answers, correctAnswers } = props;
  const [counter, setCounter] = useState(0);
  const magicNumber = 0.5;
  const randomAnswers = [...answers];
  randomAnswers.sort(() => (Math.random() - magicNumber));
  
  return (
    <div data-testid="answer-options">
      {
        randomAnswers.map((element, ind) => (
          <button
            key={ ind }
            type="button"
            data-testid="oi"
          >
            { element }
          </button>
        ))
      }
    </div>
  );
}

ButtonAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string),
  correctAnswers: PropTypes.string,
}.isRequired;

// https://javascript.info/task/shuffle  = MathRandom()
