import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonAnswers(props) {
  console.log(props, 'props');
  const { answers, correctAnswers } = props;
  const magicNumber = 0.5;
  const randomAnswers = [...answers];
  randomAnswers.sort(() => (Math.random() - magicNumber));
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
  return (
    <div data-testid="answer-options">
      {
        randomAnswers.map((element, ind) => (
          <button
            key={ ind }
            type="button"
            data-testid={ indexArray[ind] }
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
