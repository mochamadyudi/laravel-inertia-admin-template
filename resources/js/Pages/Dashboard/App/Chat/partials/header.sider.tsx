import React from 'react';
import {Button, Input, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import {ChatHeaderSiderProps} from "@/Pages/Dashboard/App/Chat/partials/chat.type";

const   HeaderSider: React.FC<ChatHeaderSiderProps> = ({ title, extra, search }) => {
  return (
    <div className={[
      'app-chat-sider-header',
      search?.show ? 'has-search' : null
    ].filter((child: string|null) => child !== null).join(' ')}>
      <div className="app-chat-sider-header--content">
        <Typography.Title level={3}>{title}</Typography.Title>
        <div className="app-chat-sider-header--action">
          {extra}
        </div>
      </div>
      {
        search && search?.show && (
          <div className="app-chat-sider-header--search">
            <Input
              placeholder="Search..."
              prefix={<Icons type={'SearchOutlined'}/>}
            />
          </div>
        )
      }
    </div>
  )
};

export default HeaderSider;
