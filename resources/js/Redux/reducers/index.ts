import { combineReducers } from 'redux';
import Theme from './Theme';
import chat from './chat';
import Project from './Project';

const reducers = combineReducers({
  Theme,
  Project,
  chat
});

export default reducers;
