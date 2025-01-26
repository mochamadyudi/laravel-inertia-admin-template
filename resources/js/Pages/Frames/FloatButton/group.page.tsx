import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const Page = () => {
  return (
    <React.Fragment>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ insetInlineEnd: 94 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
