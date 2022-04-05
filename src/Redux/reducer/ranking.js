const INITIAL_STATE = {
  localStorage: [
    { name: '',
      score: '',
      picture: '',
    },
  ],
};

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RANKING_REQUEST':
    return { ...state, localStorage: action.value };
  default:
    return state;
  }
};

export default ranking;
