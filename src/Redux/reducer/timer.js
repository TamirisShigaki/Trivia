const INITIAL_STATE = {
  timerRunning: true,
  time: 30,
  timerId: undefined,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TIMER_RUNNING': {
    if (action.value) {
      return { ...state, timerRunning: action.value, time: 30 };
    }
    return { ...state, timerRunning: action.value };
  }
  case 'TIMER':
    return { ...state, time: state.time - 1 };
  case 'TIMER_ID':
    return { ...state, timerId: action.value };
  default:
    return state;
  }
};

export default timer;
