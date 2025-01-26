import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const Page = () => {
  return (
    <React.Fragment>
      <FloatButton shape="circle" style={{ insetInlineEnd: 24 + 70 + 70 }} badge={{ dot: true }} />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 + 70 }}>
        <FloatButton
          href={'/'}
          tooltip={<div>custom badge color</div>}
          badge={{ count: 5, color: 'blue' }}
        />
        <FloatButton badge={{ count: 5 }} />
      </FloatButton.Group>
      <FloatButton.Group shape="circle">
        <FloatButton badge={{ count: 12 }} icon={<QuestionCircleOutlined />} />
        <FloatButton badge={{ count: 123, overflowCount: 999 }} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
