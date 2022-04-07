import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import ranking from './ranking';
import questions from './questions';
import answers from './answers';

const rootReducer = combineReducers({
  player,
  token,
  ranking,
  questions,
  answers,
});

export default rootReducer;
