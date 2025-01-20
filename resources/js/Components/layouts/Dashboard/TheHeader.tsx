import React from 'react';
import {Layout, Typography} from "antd";

const TheHeader: React.FC<any> = (props) => {
  return (
    <Layout.Header className={'app-header'}>
      <Typography.Title level={1}>App</Typography.Title>
    </Layout.Header>
  )
}

export default TheHeader
