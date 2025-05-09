import {ACT_EVENT} from "@/Redux/constants/action";
import {LAYOUT_FULLSCREEN, PROJECT_SIDER_COLLAPSED} from "@/Redux/constants/project";

const initialState = {
  setting:{
    fullscreen: false,
  },
  sider:{
    collapsed: false,
    width: 280,
  }
};

export default function(state= initialState, action: ActionRedux<any>){
  switch (action.type){
    case ACT_EVENT(LAYOUT_FULLSCREEN):
      return {
        ...state,
        setting: {
          ...state.setting,
          fullscreen: action?.payload
        }
      }
    case ACT_EVENT(PROJECT_SIDER_COLLAPSED):
      return {
        ...state,
        sider: {
          ...state.sider,
          collapsed: action?.payload ?? state.sider.collapsed
        }
      }
    default:
      return state;
  }
}
