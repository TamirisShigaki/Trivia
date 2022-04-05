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

export const getToken = () => async (dispatch) => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const requestJsonToken = await request.json();
  dispatch(actionToken(requestJsonToken));
};

export const getQuestion = () => async (dispatch) => {
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${requestJsonToken.token}`);
  const requestJsonQuestion = await request.json();
  dispatch(actionToken(requestJsonQuestion));
};
