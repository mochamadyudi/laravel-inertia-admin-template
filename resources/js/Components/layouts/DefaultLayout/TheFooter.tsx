import React from 'react';
import {Flex, Layout, Typography} from "antd";

interface TheFooterInterface {
  container?: boolean;
}
const TheFooter: React.FC<TheFooterInterface> = ({ container = false }) => {
  return (
    <React.Fragment>
      <Layout.Footer className={`app-content__footer ${container ? 'has-container' : ''}`}>
        <Flex gap={10} align="center" className="h-full p-4">
          <Typography.Paragraph className="!m-0">
            &copy; 2024 - Yuyuid Technology Solution Content Management System
          </Typography.Paragraph>
        </Flex>
      </Layout.Footer>
    </React.Fragment>
  )
}

export default TheFooter;
