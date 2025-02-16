import type {ReactNode} from "react";
import type {ButtonProps} from "antd";

export interface StateChatProps {
  active: 'chat' | 'phone' | 'setting' | 'starred' | 'archive' | 'group' | string;
  width?: {
    menu?: number;
    sider?: number;
  }
}
export interface ChatLayoutProps {
  children?: ReactNode;
  menu?: {
    footer?: ReactNode;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
  }
  sider: ChatHeaderSiderProps & {
    component?: ReactNode;
  };
  toolbar: ChatToolbarProps;
  state?: StateChatProps;
}
export interface ChatState{
  width: {
    menu?: number;
    sider?: number;
  }
}
export interface ChatToolbarProps {
  show: boolean;
  backButton?: {
    show: true,
  } & ButtonProps;
  title?: string | ReactNode;
  extra?: ReactNode;
}
export interface ChatContentProps {
  children: ReactNode;
  toolbar: {
    show: Required<boolean>,
  } & Omit<ToolbarContentProps, 'show'>;
}

export interface ChatHeaderSiderProps {
  title: string;
  extra?: string | ReactNode;
  search?: {
    show?: boolean,
  };
}
