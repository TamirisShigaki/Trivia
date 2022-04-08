const INITIAL_STATE = {
  correct: '',
  answers: [],
  disabledBtn: false,
  newAnswer: false,
  answer: false,
};

const answer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ANSWER': {
    if (state.correct === action.type.correct) {
      return state;
    }
    const magicNumber = 0.5;
    const answers = action.answers
      .sort(() => (Math.random() - magicNumber));
    return { ...state, correct: action.correct, answers };
    // https://javascript.info/task/shuffle  = MathRandom()
  }
  case 'DISABLED_AWNSWERS':
    return { ...state, disabledBtn: action.value };
  default:
    return state;
  }
};

export default answer;
