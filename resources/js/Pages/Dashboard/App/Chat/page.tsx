import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import Chat from "@/Pages/Dashboard/App/Chat/partials/chat.layout";

const Page = () => {
  return <Chat
    sider={{
      title: 'Chat',
      search:{
        show: true,
      },
    }}
    toolbar={{
      show: false,
    }}
    state={{
      active: 'chat',
    }}
  />
};

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" hasContainer isFooter={false} children={children}/>
  )
};

export default Page;
