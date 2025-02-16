import {ACT_REQUEST} from "@/Redux/constants/action";
import {GET_CHAT_LIST} from "@/Redux/constants/chat";

export function getChatList(payload: { params: any, [k:string]: any }){
  return {
    type: ACT_REQUEST(GET_CHAT_LIST),
    payload
  }
}
