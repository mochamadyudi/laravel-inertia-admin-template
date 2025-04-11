import {ACT_EVENT} from "@/Redux/constants/action";

import {
  ON_SAVE_THEME,
  ON_CHANGE_LOCALE,
  REHYDRATE_THEME_CONFIG,
  ON_CHANGE_NAV_COLLAPSED, ON_CHANGE_DIRECTION, THEME_TOKEN
} from "@/Redux/constants/theme";

export function onSaveTheme(payload: any): ActionRedux<any> {
  return {
    type: ACT_EVENT(ON_SAVE_THEME),
    payload,
  };
}
export function onChangeLocale(payload: any): ActionRedux<any>{
  return  {
    type: ACT_EVENT(ON_CHANGE_LOCALE),
    payload
  }
}
export function onChangeNavCollapsed(payload: boolean): ActionRedux<boolean>{
  return {
    type: ACT_EVENT(ON_CHANGE_NAV_COLLAPSED),
    payload
  }
}
export function rehydrateThemeConfig(payload: any): ActionRedux<any>{
  return {
    type: ACT_EVENT(REHYDRATE_THEME_CONFIG),
    payload
  }
}
export function onChangeDirection(payload: 'ltr' | 'rtl'): ActionRedux<'rtl' | 'ltr'> {
  return {
    type: ACT_EVENT(ON_CHANGE_DIRECTION),
    payload
  }
}

export function changeThemeToken(payload: any): ActionRedux<any>{
  return {
    type: ACT_EVENT(THEME_TOKEN),
    payload
  }
}
