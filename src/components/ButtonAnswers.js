import React, { useEffect, useState } from 'react';

export default function ButtonAnswers(props) {
const { answers, correctAnswers } = props;
// const answers = [...'alice', 1, 2, 3, 4, 5]
const magicNumber = 0.5;
const randomAnswers = [...answers];
randomAnswers.sort(() => (Math.random() - magicNumber))


console.log(randomAnswers);

    return(
        <div data-testid="answer-options" >
            {randomAnswers.map((element, index) => 
            ( <div  >
                <button
                  data-testid={
                      correctAnswers = element ? `correct-answer-${index}` 
                      : `wrong-answer-${index}`        
                  }
                  type="button">
                </button>
            </div>))  }
        </div>
                )
}

// https://javascript.info/task/shuffle  = MathRandom()