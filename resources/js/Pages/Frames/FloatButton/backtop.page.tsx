import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import { FloatButton, Typography } from 'antd';

const Page = () => {
  return (
    <React.Fragment>
      <div style={{height: '300vh', padding: 10}}>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <Typography.Paragraph>Scroll to bottom</Typography.Paragraph>
        <FloatButton.BackTop/>
      </div>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
