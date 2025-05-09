import * as IconsAntd from '@ant-design/icons';
import Icon from "@ant-design/icons";
import React from 'react';

export type IconType = {
  type: string;
  [k: string]: any;
};
export type CustomIconType = {
  svg: React.ReactNode | any;
  className?: string;
};
export const Icons = ({ type, ...rest }: IconType) => {
  // @ts-ignore
  const Component = IconsAntd && typeof IconsAntd[type] !== 'undefined'
    // @ts-ignore
    ? IconsAntd[type]
    : null;
  return Component ? <Component {...rest} /> : null;
};

export const CustomIcon = React.forwardRef((props:CustomIconType)=> <Icon component={props.svg} className={props?.className}/> )
