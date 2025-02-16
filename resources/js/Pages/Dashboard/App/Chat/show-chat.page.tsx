import React, {useEffect, useRef} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import Chat from "@/Pages/Dashboard/App/Chat/partials/chat.layout";
import AvatarStatus from "@/Components/general/AvatarStatus";
import {Button, Flex, Input, Typography} from "antd";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";
import {Icons} from "@/Components/general/Icons";
import {router, usePage} from "@inertiajs/react";
import {parseInt} from "lodash";
import useKeydown from "@/hooks/useKeydown";
import {Scrollbars} from "react-custom-scrollbars";
import {SendOutlined} from "@ant-design/icons";

const Page = () => {
  const id = usePage().props?.id as string
  const refScroll = useRef<any>(null);
  useKeydown(['Escape'], function(){
    router.replace(route('dashboard.app.chat.index'))
  });

  useEffect(() => {
    if(refScroll && refScroll.current){
      if(refScroll.current.hasOwnProperty('scrollToBottom')){
        refScroll.current.scrollToBottom();
      }
    }
  }, []);

  return (
    <Chat
      sider={{
        title: 'Chat',
        search: {
          show: true,
        },
        component: <Chat.List
          active={{
            key: "id",
            value: !isNaN(parseInt(id)) ? parseInt(id) : id
          }}
        />,
      }}
      toolbar={{
        show: true,
        backButton: {
          show: true,
          onClick() {
            router.visit(route('dashboard.app.chat.index'));
          }
        },
        title: (
          <AvatarStatus
            avatar={{
              src: "/assets/img/profile/1.png",
            }}
            name={"John doe"}
            subTitle={<Typography className="text-xs">lorem ipsum dolor sit</Typography>}
          />
        ),
        extra: <EllipsisDropdown
          menu={{
            items: [
              {
                key: 'search',
                label: 'Search',
                icon: <Icons type={'SearchOutlined'}/>
              },
              {
                key: 'export',
                label: 'Export Chat',
                icon: <Icons type={'DownloadOutlined'}/>
              },
              {
                type: 'divider'
              },
              {
                danger: true,
                key: 'clear',
                label: 'Clear Chat',
                icon: <Icons type={'DeleteOutlined'}/>
              },
            ]
          }}
        />
      }}
      state={{
        active: 'chat',
      }}
    >
      <Scrollbars autoHide ref={refScroll}>
        <Chat.LayoutConversation
          data={[
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "**Hi John!**\n _Lorem ipsum dolor sit amet_",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
            {
              "id": 1,
              type: "message",
              "from_me": true,
              "content": "Hi John!",
              "date": "2025-02-15T14:00:00"
            },
            {
              id: 2,
              type: "message",
              from_me: false,
              "receiver": {
                avatar: "/assets/img/profile/1.png",
                name: "Me",
              },
              "content": "Hey, how are you?",
              "date": "2025-02-15T14:35:00"
            },
          ]}
        >
          <></>
        </Chat.LayoutConversation>
      </Scrollbars>
      <div className="p-4 w-full">
        <Flex gap={10}>
          <Input placeholder="send message"/>
          <div>
            <Button size={'large'} icon={<SendOutlined/>}/>
          </div>
        </Flex>
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
