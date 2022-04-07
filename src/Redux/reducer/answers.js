const INITIAL_STATE = {
  correct: '',
  answers: [],
  disabledBtn: false,
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ANSWER': {
    if (state.correct === action.type.correct) {
      return state;
    }
    const magicNumber = 0.5;
    const answers = action.answers
      .sort(() => (Math.random() - magicNumber));
    return { ...state, correct: action.correct, answers };
  }
  case 'DISABLED_AWNSWERS':
    return { ...state, disabledBtn: action.value };
  default:
    return state;
  }
};

export default token;
