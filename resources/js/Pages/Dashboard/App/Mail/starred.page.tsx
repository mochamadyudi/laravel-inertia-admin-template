import React from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import MailPartial from "@/Pages/Dashboard/App/Mail/partials/mail.partial";
import {StarredData} from "@/Pages/Dashboard/App/Mail/handlers/data";

const Page = ()=> {
  return (
    <React.Fragment>
      <MailPartial
        dataSource={[...StarredData]}
      />
    </React.Fragment>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.starred'),
        defaultSelectedKeys: [route('dashboard.app.mail.starred')],
      }}
      type="dashboard"
      children={children}

    />
  )
};

export default Page;
