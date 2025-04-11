import React from 'react';
import {Flex, Layout, Typography} from "antd";
import day from 'dayjs';
interface TheFooterInterface {
  container?: boolean;
}
const TheFooter: React.FC<TheFooterInterface> = ({ container = false }) => {
  return (
    <React.Fragment>
      <Layout.Footer className={`app-content__footer ${container ? 'has-container' : ''}`}>
        <Flex gap={10} align="center" className="h-full p-4">
          <span className="!m-0 ">
            &copy; {day().format("YYYY")} - Yuyuid Technology Solution | Clonesia
          </span>
        </Flex>
      </Layout.Footer>
    </React.Fragment>
  )
}

export default TheFooter;
