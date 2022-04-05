const INITIAL_STATE = {
  valueToken: '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TOKEN_REQUEST':
    return { ...state, valueToken: action.value };
  default:
    return state;
  }
};

export default token;
