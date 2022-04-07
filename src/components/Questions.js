// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, getToken } from '../Redux/actions';
import ButtonAnswers from './ButtonAnswers';

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

  function teste() {
    if (question) {
      if (question.category) {
        return true;
      }
      return false;
    }
    return false;
  }

  return (
    <div>
      {teste() && (
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
          <ButtonAnswers
            answers={ [...question.incorrect_answers,
              question.correct_answer] }
            correctAnswers={ question.correct_answer }
          />
        </>
      )}

      <button
        type="button"
        data-testid="btn-next"
        onClick={ nextQuestion }
      >
        Next Question
      </button>
    </div>
  );
}
