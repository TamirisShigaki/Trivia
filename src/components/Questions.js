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
  return (
    <div>
      <h4
        data-testid="question-category"
      >
        Category
      </h4>
      <p
        data-testid="question-text"
      >
        Text
      </p>
      <div
        data-testid="answer-options"
      >
        <button
          data-testid="btn-play"
          type="button"
        /* onClick={ handleBtmclick } */
        >
          Answer 1
        </button>
        <button
          data-testid="btn-play"
          type="button"
        /* onClick={ handleBtmclick } */
        >
          Answer 2
        </button>
        <button
          data-testid="btn-play"
          type="button"
        /* onClick={ handleBtmclick } */
        >
          Answer 3
        </button>
        <button
          data-testid="btn-play"
          type="button"
        /* onClick={ handleBtmclick } */
        >
          Answer 4
        </button>
        <button
          data-testid="btn-play"
          type="button"
        /* onClick={ handleBtmclick } */
        >
          Answer 5
        </button>
      </div>
    </div>
  );
}

/* class Questions extends React.Component {
  constructor() {
    super();

    this.state = {
      game: [],
      counter: 0,
    };
  }

  handleGame = async () => {
    const { token, apiGetToken } = this.props;
    const questionTotal = 5;
    const limitResponse = 3;
    const data = await getQuestion(questionTotal, token);

    if (data.response_code === limitResponse) {
      apiGetToken();
    } else {
      this.setState({
        game: data && data.results,
      });
    }
  }

  handleCounter = () => {
    this.setState((preview) => ({
      counter: preview.counter + 1,
    }));
  }

  render() {
    const { game, counter } = this.state;
    return (
      <div>
        <h1 data-testid="question-category">
          { game.length > 0 && game[counter].category }
        </h1>
        <h2 data-testid="question-text">
          { game.length > 0 && game[counter].question }
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  apiGetToken: () => dispatch(getQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

Questions.propTypes = {
  token: PropTypes.string,
}.isRequired;
 */
