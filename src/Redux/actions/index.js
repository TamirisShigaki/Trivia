import store from '../store';

export const actionPlayer = (value) => ({
  type: 'USER_REQUEST',
  value,
});

export const actionToken = (value) => ({
  type: 'TOKEN_REQUEST',
  value,
});

export const actionRanking = (value) => ({
  type: 'RANKING_REQUEST',
  value,
});

export const actionQuestion = (value) => ({
  type: 'QUESTION_ACTION',
  value,
});

export const getToken = () => async (dispatch) => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const requestJsonToken = await request.json();
  dispatch(actionToken(requestJsonToken));
};

export const getQuestion = () => async (dispatch) => {
  const { token } = store.getState().token;
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const requestJsonQuestion = await request.json();
  dispatch(actionQuestion(requestJsonQuestion));
};
