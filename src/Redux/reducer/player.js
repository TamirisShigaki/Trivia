const INITIAL_STATE = {
  name: '',
  score: 0,
  assertions: 0,
  gravatarEmail: '',
  gravatarImage: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_REQUEST':
    return {
      ...state,
      name: action.value.name,
      gravatarEmail: action.value.email,
    };
  case 'GRAVATAR_IMAGE':
    return { ...state, gravatarImage: action.value };
  case 'ADD_SCORE': {
    return { ...state,
      score: state.score + action.value,
      assertions: state.assertions + 1 };
  }
  default:
    return state;
  }
};

export default player;
