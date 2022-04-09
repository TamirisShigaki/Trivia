// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { actionAnswers, getQuestion,
  getToken, actionTimerRuning, actionSetTimerId } from '../Redux/actions';
import ButtonAnswers from './ButtonAnswers';
import Timer from './Timer';

export default function Questions() {
  const dispatch = useDispatch();
  const questionsReducer = useSelector((state) => state.questions.questions);
  const { token } = useSelector((state) => state);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [position, setPosition] = useState(0);
  const [hasClick, setHasClick] = useState(false);

  useEffect(() => { // Efeito similar ao ComponentDidMount
    dispatch(getQuestion());
  }, [dispatch]);

  useEffect(() => {
    const magicNumber = 3; // verifica se o token está valido
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

  function nextQuestion() {
    setQuestion(questions[position]);
    setPosition(position + 1);
    setHasClick(false);
    dispatch(actionTimerRuning(true));
    dispatch(actionSetTimerId(undefined));
  }

  useEffect(() => {
    if (question && question.category) {
      dispatch(actionAnswers([...question.incorrect_answers,
        question.correct_answer], question.correct_answer));
    }
  }, [question, dispatch]);

  /*   function teste() {
    if (question) {
      if (question.category) {
        return true;
      }
      return false;
    }
    return false;
  } */
  const magicNumber5 = 5;

  return (
    <div>
      {question && question.category && (
        <>
          <Timer />
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
          <ButtonAnswers difficulty={ question.difficulty } setHasClick={ setHasClick } />
        </>
      )}

      {
        (hasClick && position < magicNumber5) && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ nextQuestion }
          >
            Next Question
          </button>
        )
      }
      {
        (hasClick && position === magicNumber5) && (
          <Link to="/feedback">
            <button
              type="button"
              data-testid="btn-next"
              onClick={ nextQuestion }
            >
              Next Question
            </button>
          </Link>
        )
      }
    </div>
  );
}
