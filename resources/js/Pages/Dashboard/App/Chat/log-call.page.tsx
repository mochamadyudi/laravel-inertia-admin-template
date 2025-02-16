import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import Chat from "@/Pages/Dashboard/App/Chat/partials/chat.layout";
import {Icons} from "@/Components/general/Icons";
import {Button, Empty, Typography} from "antd";

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
        title: 'Calls',
        search:{
          show: true,
        },
        component: <div className="h-full flex flex-col items-center justify-center">
          <Empty/>
        </div>
      }}
      toolbar={{
        show: false,
      }}
      state={{
        active: 'phone',
      }}    >
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6">
          {
            menu.map((child: { icon: string; name: string; id: number; })=> {
              return (
                <div className="col-span-1 flex flex-col items-center justify-center space-y-2">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-layout dark:bg-layout-dark">
                    <Icons type={child.icon} className={`text-2xl ${child.id === active ? 'text-primary' : ''}`}/>
                  </div>
                  <Typography className="text-sm">{child.name}</Typography>
                </div>
              )
            })
          }
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
