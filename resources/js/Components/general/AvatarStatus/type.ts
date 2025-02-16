import type {ReactNode} from "react";
import {AvatarProps} from "antd/es/avatar/avatar";
import {ImageProps} from "antd";

export type AvatarStatusAttr = {
  avatar?: ImageProps & { type?: string };
  name?: string;
  suffix?: string | ReactNode;
  subTitle?: string | ReactNode;
  onNameClick?: (props?: AvatarStatusAttr| any)=> void;
  [k:string]: any;
}
