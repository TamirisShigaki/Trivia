const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TOKEN_REQUEST':
    return action.value;
  default:
    return state;
  }
};

export default token;
