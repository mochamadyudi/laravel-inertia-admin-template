import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {ACT_FAILURE, ACT_REQUEST, ACT_SUCCESS} from "@/Redux/constants/action";
import {GET_CHAT_LIST} from "@/Redux/constants/chat";
import {MessageListData} from "@/Pages/Dashboard/App/Chat/handlers/data";

export function* _getChatList(){
  yield takeEvery(ACT_REQUEST(GET_CHAT_LIST), function*({ payload }: any ){
    try{
      // @ts-ignore
      const response = yield call(()=> {
        return new Promise((resolve)=> {
          /**
           * @description call api using axios
           * @example axios.get(url: string).then((response)=> resolve(response?.data))
           */
          setTimeout(()=> {
            resolve({
              status: "ok",
              data: MessageListData
            })
          },1500)
        })
      })
      yield put({
        type: ACT_SUCCESS(GET_CHAT_LIST),
        payload: response
      })
    }catch (e){
      yield put({
        type: ACT_FAILURE(GET_CHAT_LIST),
        payload: null
      })
    }
  })
}
export default function* rootSaga(){
  yield all([
    fork(_getChatList)
  ])
}
