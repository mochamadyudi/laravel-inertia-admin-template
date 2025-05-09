import React, {DOMAttributes} from "react";
import type {BadgeProps, SelectProps, TooltipProps} from "antd";
import {CustomIconType, IconType} from "@/Components/general/Icons";
import {AbstractCheckboxProps} from "antd/es/checkbox/Checkbox";

export type TicketAttributeWidget = {
  widget: 'text',
  widgetProps: {
    children: React.ReactNode;
  }
} | {
  widget: 'badge';
  widgetProps: BadgeProps
} | {
  widget: 'tag';
  widgetProps: TicketTagProps
} | {
  widget: 'select';
  widgetProps: SelectProps;
} | {
  widget: 'icon';
  widgetProps: IconType;
} | {
  widget: 'svg';
  widgetProps: CustomIconType;
} | {
  widget: 'custom';
  children: React.ReactNode
} | {
  widget: 'tooltip';
  widgetProps: TooltipProps;
};

export type TicketAttributeType = {label?: string; value?: any;} & TicketAttributeWidget;

export type TicketItemProps = {
  id?: number,
  type: 'story' | 'task' | 'bug' | 'epic' | 'custom'
  projectKey: string;
  attributes?: TicketAttributeType[];
  selected: boolean;
  summary?: string;
  extra?: React.ReactNode | (()=> React.ReactNode);
  epic?: TicketTagProps;
  assignee?: {
    src?: string;
    name?: string;
  };
  onSelect: (event: AbstractCheckboxProps['onChange']) => void;
  onClick?: (event: DOMAttributes['onClick']) => void;
  classNames?: {
    root?: string;
    left?: string;
    middle?: string;
    right?: string;
    content?: string;
  }
};

export type TicketTagProps = {
  label: string;
  color: string;
  textColor: string;
}
