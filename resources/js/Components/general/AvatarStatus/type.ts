import type {ReactNode} from "react";
import {AvatarProps} from "antd/es/avatar/avatar";
import {ImageProps} from "antd";

export type AvatarStatusAttr = {
  shape?: 'rounded' | 'circle'
  avatar?: ImageProps & { type?: string };
  name?: string | ReactNode;
  suffix?: string | ReactNode;
  subTitle?: string | ReactNode;
  onNameClick?: (props?: AvatarStatusAttr| any)=> void;
  [k:string]: any;
}
