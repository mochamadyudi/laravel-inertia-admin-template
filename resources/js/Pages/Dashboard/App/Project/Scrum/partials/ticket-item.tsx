import React from 'react';
import {Avatar, Badge, Checkbox, Select, Space, Tooltip} from "antd";
import {TicketAttributeType, TicketItemProps} from './types';
import TicketTag from "@/Pages/Dashboard/App/Project/Scrum/partials/ticket-tag";
import {Icons} from "@/Components/general/Icons";


const TicketAttributeMap: React.FC<TicketAttributeType> = (item) => {
  switch (item.widget) {
    case "tag":
      return <TicketTag color={item.widgetProps?.color} textColor={item.widgetProps?.textColor}
                        label={item.widgetProps?.label}/>
    case "badge":
      return <Badge
        {...item.widgetProps}
        classNames={{
          indicator: item.widgetProps?.classNames?.indicator ?? "bg-slate-400 dark:bg-card-dark"
        }}
      />
    case "icon":
      return <Icons {...item.widgetProps}/>
    case "tooltip":
      return <Tooltip {...item.widgetProps}/>
    case "custom":
      return item.children;
    case "select":
      return <Select {...item.widgetProps}/>
    case "text":
      return item.widgetProps.children;
    default:
      return <></>
  }
}
const TicketType: React.FC<Pick<TicketItemProps, 'type'>> = (props) => {
  let classes = 'min-w-[20px] w-[20px] h-[20px] rounded flex items-center justify-center';
  let classColor = '';
  let classesIcon = 'text-xs'
  let icon = 'GlobalOutlined'

  switch (props.type) {
    case "epic":
      icon = 'FlagOutlined';
      classesIcon += ' text-purple-500 dark:text-purple-100';
      classColor = 'bg-purple-100 dark:bg-purple-800';
      break;
    case "bug":
      icon = 'BugOutlined';
      classesIcon += ' text-red-500 dark:text-red-100';
      classColor = 'bg-red-100 dark:bg-red-800';
      break;
    case "task":
      icon = 'CheckOutlined';
      classesIcon += ' text-blue-500 dark:text-blue-100';
      classColor = 'bg-blue-100 dark:bg-blue-800';
      break;
    case "story":
      icon = 'BookOutlined';
      classesIcon += ' text-green-200 dark:text-green-100';
      classColor = 'bg-green-600 dark:bg-green-800';
      break;
    default:
      break;
  }
  return (
    <div
      className={[classes, classColor].join(' ')}>
      <Icons type={icon} className={classesIcon}/>
    </div>
  )
}
const TicketItem: React.FC<TicketItemProps> = (props) => {
  let {
    projectKey,
    selected,
    summary,
    attributes,
    epic
  } = props;
  return (
    <div className={[
      "project-ticket-item",
      props.selected ? 'project-ticket-item-selected' : '',
      props?.classNames?.root ?? ''
    ].join(' ')}>
      <div className={[
        "project-ticket-item-left",
        props?.classNames?.left ?? ''
      ].join(' ')}>
        <Checkbox checked={selected} defaultChecked={selected} onChange={props.onSelect}/>
      </div>
      <div
        className={[
          'project-ticket-item-middle',
          props?.classNames?.middle ?? ''
        ].join(' ')}
        onClick={props?.onClick}
      >
        <TicketType type={props.type}/>
        <div className={["project-ticket-item-content", props?.classNames?.content ?? ''].join(' ')}>
          <span className="!m-0 !p-0 leading-none whitespace-nowrap text-primary">{projectKey}</span>
          <span className="!m-0 !p-0 leading-none line-clamp-1 ">{summary}</span>
        </div>
      </div>
      <div className={[
        "project-ticket-item-right",
        props?.classNames?.right ?? ''
      ].join(' ')}>
        <Space>
          {
            epic && (
              <TicketTag color={epic?.color} textColor={epic?.textColor} label={epic?.label}/>
            )
          }
          {
            Array.isArray(attributes) && attributes.map((item: TicketAttributeType) => <TicketAttributeMap {...item}/>)
          }

          <Avatar src={props?.assignee?.src ?? <Icons type={'UserOutlined'}/>} className="bg-primary"/>
        </Space>
      </div>
    </div>
  )
};

export default TicketItem;
