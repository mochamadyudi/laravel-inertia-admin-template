import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import {FloatButton} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const Page = () => {
  return (
    <React.Fragment>
      <FloatButton icon={<SearchOutlined/>} tooltip={'Basic Float Button'}/>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
