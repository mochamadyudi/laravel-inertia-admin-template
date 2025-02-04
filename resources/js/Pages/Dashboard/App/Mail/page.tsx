import React,{useState} from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import MailPartial from "@/Pages/Dashboard/App/Mail/partials/mail.partial";
import {InboxData} from "@/Pages/Dashboard/App/Mail/handlers/data";


const Page = ()=> {

  return (
    <React.Fragment>
      <MailPartial
        dataSource={[...InboxData]}
      />
    </React.Fragment>
  )
};

// @ts-ignore
Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.index'),
        defaultSelectedKeys: [route('dashboard.app.mail.index')],
      }}
      type="dashboard"
      children={children}

    />
  )
};
export default Page;
