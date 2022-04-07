import md5 from 'crypto-js/md5';
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

export const actionGravatarImage = (email) => {
  const emailHash = md5(email).toString();
  const image = `https://www.gravatar.com/avatar/${emailHash}`;
  return { type: 'GRAVATAR_IMAGE', value: image };
};

actionGravatarImage('teste');

export const getToken = () => async (dispatch) => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const requestJsonToken = await request.json();
  dispatch(actionToken(requestJsonToken.token));
};

export const getQuestion = () => async (dispatch) => {
  const { token } = store.getState();
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const requestJsonQuestion = await request.json();
  dispatch(actionQuestion(requestJsonQuestion));
};
