import React from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import {Form, Input} from "antd";

const Page = ()=> {
  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item name="subject">
          <Input placeholder="Input your subject"/>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.compose'),
        defaultSelectedKeys: [route('dashboard.app.mail.compose')],
      }}
      type="dashboard"
      children={children}

    />
  )
};

export default Page;
