import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import Chat from "@/Pages/Dashboard/App/Chat/partials/chat.layout";
import {Icons} from "@/Components/general/Icons";
import {Button, Empty, Menu, Tooltip, Typography} from "antd";

const Page = () => {
  const [active, setActive] = useState<number>(1);
  const menu = [
    {
      id: 1,
      icon: "VideoCameraOutlined",
      name: "Start Call",
    },
    {
      id: 2,
      icon: "LinkOutlined",
      name: "New call link"
    },
    {
      id: 3,
      icon: "AppstoreOutlined",
      name: "Call a number"
    },
  ];
  return (
    <Chat
      sider={{
        title: 'Settings',
        search:{
          show: false,
        },
        component: <>
          <Menu
            className="bg-transparent border-none"
            theme={'light'}
            items={[
              {
                key: 'account',
                icon: <Icons className="text-lg" type={'KeyOutlined'}/>,
                label: "Account"
              },
              {
                key: 'privacy',
                icon: <Icons className="text-lg" type={'LockOutlined'}/>,
                label: "Privacy"
              },
              {
                key: 'chat',
                icon: <Icons className="text-lg" type={'MessageOutlined'}/>,
                label: "chat"
              },
              {
                key: 'notification',
                icon: <Icons className="text-lg" type={'BellOutlined'}/>,
                label: "Notification"
              },
              {
                type: 'divider'
              },
              {
                key: 'helps',
                icon: <Icons className="text-lg" type={'InfoCircleOutlined'}/>,
                label: "Information"
              },

            ]}
          />
        </>,
      }}
      toolbar={{
        show: true,
        title: "Account",
        backButton: {
          show: true,
        }
      }}
      state={{
        active: 'setting',
      }}
    >
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 flex flex-col items-center justify-center space-y-2">
            <Tooltip title="Security Notification">
              <div
                className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center rounded-2xl bg-layout dark:bg-layout-dark">
                <Icons type="LockOutlined" className={`text-2xl`}/>
              </div>
            </Tooltip>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center space-y-2">
            <Tooltip title="How to delete account">
            <div
              className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center rounded-2xl bg-layout dark:bg-layout-dark">
              <Icons type="DeleteOutlined" className={`text-2xl text-red-400`}/>
            </div>
            </Tooltip>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center space-y-2">
            <Tooltip title="Log out">
              <div
                className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center rounded-2xl bg-layout dark:bg-layout-dark">
                <Icons type="LogoutOutlined" className={`text-2xl text-red-400`}/>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </Chat>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" hasContainer children={children}/>
  )
};

export default Page;
