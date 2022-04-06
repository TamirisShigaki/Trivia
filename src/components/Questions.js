// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, getToken } from '../Redux/actions';

export default function Questions() {
  const dispatch = useDispatch();
  const questionsReducer = useSelector((state) => state.questions.questions);
  const { token } = useSelector((state) => state);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [position, setPosition] = useState(0);

  console.log(questions, 'aqui');

  useEffect(() => { // Efeito similar ao ComponentDidMount
    dispatch(getQuestion());
  }, [dispatch]);

  useEffect(() => {
    const magicNumber = 3;
    if (questionsReducer.response_code === magicNumber) {
      dispatch(getToken());
    } else {
      setQuestions(questionsReducer.results);
    }
  }, [questionsReducer, dispatch, token]);

  useEffect(() => {
    if (questions) {
      setPosition(1);
      setQuestion(questions[0]);
    }
  }, [questions]);
  console.log(question);

  function nextQuestion() {
    setQuestion(questions[position]);
    setPosition(position + 1);
  }

  const magicNumber = 0.5;

  return (
    <div>
      {question && (
        <>
          <h4
            data-testid="question-category"
          >
            {question.category}
          </h4>
          <p
            data-testid="question-text"
          >
            {question.question}
          </p>
        </>
      )}

      {question.type === 'multiple' && [...question.incorrect_answers,
      question.correct_answer].sort(() => (Math.random() - magicNumber))
        .map((element, index) =>
          <button
            data-testid="btn-play"
            type="button"
          /* onClick={ handleBtmclick } */
          >
            Answer 1
          </button>
        )
        (
          <div
            data-testid="answer-options"
          >
        )}
    </div>
    // https://javascript.info/task/shuffle  = MathRandom()
  );
}
