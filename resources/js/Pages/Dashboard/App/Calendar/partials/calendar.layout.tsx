import React from 'react';
import {Layout, Splitter} from "antd";

interface ICalendarLayoutProps {
  children: React.ReactNode;
}
const CalendarLayout: React.FC<ICalendarLayoutProps> = ({ children }) => {
  return (
    <Layout className="app-calendar h-full">
      <Splitter>
        <Splitter.Panel defaultSize="65%" min={512}>
          <Layout.Content className="app-calendar-content bg-transparent p-4">
            {children}
          </Layout.Content>
        </Splitter.Panel>
        <Splitter.Panel min={320}>
          <Layout.Sider
            width={320}
            className="app-calendar-sider border-l "
          >

          </Layout.Sider>
        </Splitter.Panel>
      </Splitter>
    </Layout>
  )
};

export default CalendarLayout;
