import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import ranking from './ranking';

const rootReducer = combineReducers({
  player,
  token,
  ranking,
});

export default rootReducer;
