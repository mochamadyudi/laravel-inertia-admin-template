import React from 'react';
import {Layout, Splitter, Typography} from "antd";

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
            className="app-calendar-sider"
          >
            <Typography.Title level={1}>Agenda</Typography.Title>
            <div>
              <div className="rounded-xl w-full p-4 bg-red-500"></div>
            </div>
          </Layout.Sider>
        </Splitter.Panel>
      </Splitter>
    </Layout>
  )
};

export default CalendarLayout;
