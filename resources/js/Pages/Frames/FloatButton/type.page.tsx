import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import {FloatButton} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const Page = () => {
  return (
    <React.Fragment>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
