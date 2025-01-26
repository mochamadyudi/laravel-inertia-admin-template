import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const Page = () => {
  return (
    <React.Fragment>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ insetInlineEnd: 94 }}
        icon={<CustomerServiceOutlined />}
      />
      <FloatButton
        shape="square"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<CustomerServiceOutlined />}
      />
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
