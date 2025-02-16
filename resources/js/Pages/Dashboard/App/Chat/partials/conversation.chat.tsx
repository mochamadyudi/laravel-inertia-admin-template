import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";
import {Typography} from "antd";
import {Utils} from "@/Utils";
import dayjs from "dayjs";

export interface ChatBubbleItemAttribute {
  type: 'message' | 'badge' | 'alert-warning' | 'alert-info' | 'alert-error';
  id?: string | number;
  content: string;
  from_me?: boolean;
  receiver?: {
    avatar?: string;
    name?: string;
  }
  date?: string;

}
export interface IConversationProps<T> {
  data: T[] | ChatBubbleItemAttribute[];
  children: React.ReactNode;
}
const ConversationChat: React.FC<IConversationProps<ChatBubbleItemAttribute>> = ({ data })=> {
  return (
    <div className="app-chat-conversation">
      {
        data.map((item)=> {
          return (
            <ConversationItem
              {...item}
              type={item.type}
              key={`conversation-item-${item?.id ?? Math.random()}`}
            />
          )
        })
      }

    </div>
  )
};

const ConversationItem: React.FC<ChatBubbleItemAttribute> = ({ type, ...props}) => {
  return (
    <div className={`app-chat-bubble ${type} ${props.from_me ? 'right' : 'left'}`}>
      <div className="app-chat-bubble-content">
        <Typography dangerouslySetInnerHTML={{__html: Utils.ensureMessageFormat(props?.content)}}/>
        {
          dayjs(props?.date).isValid() && (
            <Typography className="text-right date">{dayjs(props?.date).format('HH:mm')}</Typography>
          )
        }

      </div>
    </div>
  )
}

export default ConversationChat;
