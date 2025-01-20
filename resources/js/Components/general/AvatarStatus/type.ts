import type {ReactNode} from "react";
import {AvatarProps} from "antd/es/avatar/avatar";

export type AvatarStatusAttr = {
  avatar?: AvatarProps & { type?: string };
  name?: string;
  suffix?: string | ReactNode;
  subTitle?: string | ReactNode;
  onNameClick?: (props?: AvatarStatusAttr| any)=> void;
  [k:string]: any;
}
