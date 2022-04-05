const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_REQUEST':
    return { ...state, name: action.value };
  default:
    return state;
  }
};

export default player;
