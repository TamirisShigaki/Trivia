import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ButtonAnswer.css';

export default function ButtonAnswers(props) {
  console.log(props, 'props');
  const { answers, correctAnswers } = props;
  const magicNumber = 0.5;
  const [randomAnswers, setRandomAnswers] = useState([...answers]
    .sort(() => (Math.random() - magicNumber)));
  const [classArray, setClassArray] = useState(['', '', '', '']);

  useEffect(() => {
    setRandomAnswers([...answers]
      .sort(() => (Math.random() - magicNumber)));
    setClassArray(['', '', '', '']);
  }, [answers]);

  function createIndex() {
    const indexArray = [];
    let counter = 0;
    randomAnswers.forEach((item) => {
      if (item !== correctAnswers) {
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
    const buttonColor = indexArray.map((element) => {
      if (element === 'correct-answer') {
        return 'green';
      }
      return 'red';
    });
    console.log('button', buttonColor);
    setClassArray(buttonColor);
  }

  return (
    <div data-testid="answer-options">
      {
        randomAnswers.map((element, ind) => (
          <button
            key={ ind }
            type="button"
            data-testid={ indexArray[ind] }
            onClick={ () => setColor() }
            className={ classArray[ind] }
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
