import React from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import MailPartial from "@/Pages/Dashboard/App/Mail/partials/mail.partial";
import {DraftData} from "@/Pages/Dashboard/App/Mail/handlers/data";

const Page = ()=> {
  return (
    <React.Fragment>
      <MailPartial
        dataSource={[...DraftData]}
      />
    </React.Fragment>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.draft'),
        defaultSelectedKeys: [route('dashboard.app.mail.draft')],
      }}
      type="dashboard"
      children={children}

    />
  )
};

export default Page;
