import {DIR_LTR, DIR_RTL, THEME_CONFIG} from "@/Configs/app.config";
import {REHYDRATE} from "redux-persist/es/constants";
import {
  ON_CHANGE_DIRECTION,
  ON_CHANGE_LOCALE,
  ON_CHANGE_NAV_COLLAPSED,
  ON_SAVE_THEME,
  REHYDRATE_THEME_CONFIG
} from "@/Redux/constants/theme";
import {ACT_EVENT} from "@/Redux/constants/action";

const initialState: any = {
  ...THEME_CONFIG,
  loading: true,
  antd: {}
}

export default function (state = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case REHYDRATE:
      document.body.classList.remove(state.currentTheme);
      document.body.classList.add(action?.payload?.Theme?.currentTheme ?? state.currentTheme);
      return action?.payload?.Theme ?? state;
    case ACT_EVENT(ON_CHANGE_LOCALE):
      if(['ar'].includes(action?.payload)){
        Reflect.set(state,'direction', DIR_RTL)
      }else{
        if(state?.direction !== DIR_LTR){
          Reflect.set(state,'direction', DIR_LTR)
        }

      }
      return {
        ...state,
        locale: action.payload
      };
    case ACT_EVENT(ON_SAVE_THEME):
      document.body.classList.remove(state.currentTheme);
      document.body.classList.add(action.payload ?? state.currentTheme);
      return {
        ...state,
        currentTheme: action.payload
      };
    case ACT_EVENT(ON_CHANGE_NAV_COLLAPSED):
      return {
        ...state,
        navCollapsed: action.payload
      }
    case ACT_EVENT(REHYDRATE_THEME_CONFIG):
      return {
        ...state,
        loading: false,
        antd: {
          ...action?.payload
        }
      }
    case ACT_EVENT(ON_CHANGE_DIRECTION):
      return {
        ...state,
        direction: action?.payload ?? state?.direction
      }
    default:
      document.body.classList.add(state.currentTheme);
      return state;
  }
}
