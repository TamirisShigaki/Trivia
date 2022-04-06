const INITIAL_STATE = {
  name: 'teste',
  assertions: '',
  score: 0,
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
  default:
    return state;
  }
};

export default player;
