import {THEME_CONFIG} from "@/Configs/app.config";
import {REHYDRATE} from "redux-persist/es/constants";
import {
  ON_CHANGE_LOCALE,
  ON_CHANGE_NAV_COLLAPSED,
  ON_SAVE_THEME,
  REHYDRATE_THEME_CONFIG
} from "@/Redux/constants/theme";
import {ACT_EVENT} from "@/Redux/constants/action";

const initialState: any = {
  ...THEME_CONFIG,
  antd: {}
}

export default function (state = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case REHYDRATE:
      document.body.classList.remove(state.currentTheme);
      document.body.classList.add(action?.payload?.Theme?.currentTheme ?? state.currentTheme);
      return action?.payload?.Theme ?? state;
    case ACT_EVENT(ON_CHANGE_LOCALE):
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
        antd: {
          ...action?.payload
        }
      }
    default:
      document.body.classList.add(state.currentTheme);
      return state;
  }
}
