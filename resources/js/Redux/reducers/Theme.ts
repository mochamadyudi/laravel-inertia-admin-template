import {THEME_CONFIG} from "@/Configs/app.config";

const initialState: any = {
  ...THEME_CONFIG
}

export default function (state = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    default:
      return state;
  }
}
