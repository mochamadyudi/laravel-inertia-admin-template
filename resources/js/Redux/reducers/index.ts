import { combineReducers } from 'redux';
import Theme from './Theme';
import chat from './chat';

const reducers = combineReducers({
  Theme,
  chat
});

export default reducers;
