import {ACT_FAILURE, ACT_REQUEST, ACT_SUCCESS} from "@/Redux/constants/action";
import {GET_CHAT_LIST} from "@/Redux/constants/chat";

const initialState: any = {
  loading: true,
  data: []
};

export default function (state: any = initialState, action: ActionRedux<any>){
  switch (action.type){
    case ACT_REQUEST(GET_CHAT_LIST):
      return {
        ...state,
        loading: true,
      }
    case ACT_SUCCESS(GET_CHAT_LIST):
      console.log(action.payload,)
      return {
        ...state,
        loading: false,
        data: action.payload?.data
      }
    case ACT_FAILURE(GET_CHAT_LIST):
      return {
        ...state,
        loading: false,
        data: []
      }
    default:
      return state;
  }
}
