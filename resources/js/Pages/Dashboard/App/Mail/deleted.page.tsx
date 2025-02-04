import React from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import MailPartial from "@/Pages/Dashboard/App/Mail/partials/mail.partial";
import {DraftData, InactiveData} from "@/Pages/Dashboard/App/Mail/handlers/data";

const Page = ()=> {
  return (
    <React.Fragment>
      <MailPartial
        dataSource={[...InactiveData]}
      />
    </React.Fragment>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.deleted'),
        defaultSelectedKeys: [route('dashboard.app.mail.deleted')],
      }}
      type="dashboard"
      children={children}

    />
  )
};

export default Page;
