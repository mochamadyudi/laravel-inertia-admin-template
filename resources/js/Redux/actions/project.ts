import {ACT_EVENT} from "@/Redux/constants/action";
import {LAYOUT_FULLSCREEN, PROJECT_SIDER_COLLAPSED} from "@/Redux/constants/project";

export function onProjectFullScreen(payload: boolean): ActionRedux<boolean>{
  return {
    type: ACT_EVENT(LAYOUT_FULLSCREEN),
    payload
  }
}

export function onProjectSiderCollapse(payload: boolean): ActionRedux<boolean>{
  return {
    type: ACT_EVENT(PROJECT_SIDER_COLLAPSED),
    payload
  }
}
