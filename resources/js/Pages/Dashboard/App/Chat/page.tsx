import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import Chat from "@/Pages/Dashboard/App/Chat/partials/chat.layout";

const Page = () => {
  return <></>
};

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" hasContainer>
      <Chat
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
    </TheLayout>
  )
};

export default Page;
