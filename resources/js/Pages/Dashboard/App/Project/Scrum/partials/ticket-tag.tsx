import React, {useState} from 'react';
import {Tag} from "antd";
import type {TicketTagProps} from "@/Pages/Dashboard/App/Project/Scrum/partials/types";

const TicketTag: React.FC<TicketTagProps> = ({ label, color, textColor}) => {
  const [classes] = useState<string>(()=> {
    return [
      'px-1.5 py-0.5 !text-xs',
      textColor,
    ].join(' ')
  });
  return (
    <Tag color={color ?? '#753acc'} className={classes}>{label}</Tag>
  );
};

export default TicketTag;
