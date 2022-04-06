import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import ranking from './ranking';
import questions from './questions';

const rootReducer = combineReducers({
  player,
  token,
  ranking,
  questions,
});

export default rootReducer;
