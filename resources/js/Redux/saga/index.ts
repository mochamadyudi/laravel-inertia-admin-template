import { all } from 'redux-saga/effects';
import Chat from './chat';

export default function* rootSaga(){
    yield all([
      Chat()
    ])
}
