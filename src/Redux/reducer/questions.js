const INITIAL_STATE = {
  questions: '',
  timerRunning: true,
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'QUESTION_ACTION':

    return { ...state, questions: action.value };

  case 'TIMER_RUNNING':
    return { ...state, timerRunning: action.value };
  default:
    return state;
  }
};

export default questions;
