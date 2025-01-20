import React from 'react';
import {Flex, Layout, Typography} from "antd";

interface TheContentInterface {
  children: React.ReactNode;
  isFooter?: boolean;
}
const TheContent: React.FC<TheContentInterface> = ({ children, isFooter }) => {
  return (
    <Layout.Content className={"app-content"}>
      <Layout
        className={`app-content__content flex flex-col ${!isFooter ? 'no-footer' : ''}`}
      >
        {children}
      </Layout>
      {isFooter && (
        <Layout.Footer className="app-content__footer">
          <Flex gap={10} align="center" className="h-full p-4">
            <Typography className="!text-xs">
              &copy; 2024 - Notifbox Content Management System
            </Typography>
          </Flex>
        </Layout.Footer>
      )}
    </Layout.Content>
  )
};

export default TheContent;
