import React, { useState } from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton, Switch } from 'antd';
const Page = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <React.Fragment>
      <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} />
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ insetInlineEnd: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
      <FloatButton.Group
        open={open}
        shape="square"
        trigger="click"
        style={{ insetInlineEnd: 88 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
