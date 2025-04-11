import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Affix, Badge, BadgeProps, Calendar, CalendarProps, Layout, Splitter, Typography} from "antd";
import CalendarLayout from "@/Pages/Dashboard/App/Calendar/partials/calendar.layout";
import {Dayjs} from "dayjs";
import {CalendarMode} from "antd/es/calendar/generateCalendar";
import CalendarProvider from "@/Pages/Dashboard/App/Calendar/partials/calendar.context";
import {Scrollbars} from "react-custom-scrollbars";

const Page = () => {
  const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = []; // Specify the type of listData
    switch (value.date()) {
      case 8:
        listData = [
          {type: 'warning', content: 'This is warning event.'},
          {type: 'success', content: 'This is usual event.'},
        ];
        break;
      case 10:
        listData = [
          {type: 'warning', content: 'This is warning event.'},
          {type: 'success', content: 'This is usual event.'},
          {type: 'error', content: 'This is error event.'},
        ];
        break;
      case 15:
        listData = [
          {type: 'warning', content: 'This is warning event'},
          {type: 'success', content: 'This is very long usual event......'},
          {type: 'error', content: 'This is error event 1.'},
          {type: 'error', content: 'This is error event 2.'},
          {type: 'error', content: 'This is error event 3.'},
          {type: 'error', content: 'This is error event 4.'},
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content}/>
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  function _onPanelChange(date: any, mode: CalendarMode) {
    console.log({date, mode})
  }

  return (
    <div className="app-content-full">
      <div className="h-full overflow-hidden">
        <CalendarProvider>
          <Layout className="app-calendar  h-full">
            <Splitter>
              <Splitter.Panel defaultSize="65%" min={512}>
                <Layout.Content className="app-calendar-content bg-transparent p-4">
                  <Calendar
                    fullscreen
                    cellRender={cellRender}
                    onPanelChange={_onPanelChange}
                  />
                </Layout.Content>
              </Splitter.Panel>
              <Splitter.Panel min={320}>

                <div className="w-full h-full app-calender-sider flex flex-col">
                  <div className="p-6 bg-white dark:bg-card-dark border-b border-primary">
                    <Typography.Title level={1}>Agenda</Typography.Title>
                  </div>
                  <Scrollbars autoHide className="flex-1">
                    <div className="space-y-6 p-6 bg-layout dark:bg-layout-dark">
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                      <div className="rounded-xl w-full p-4 bg-red-500"></div>
                    </div>
                  </Scrollbars>
                </div>


              </Splitter.Panel>
            </Splitter>
          </Layout>
        </CalendarProvider>
      </div>
    </div>
  )
};

Page.layout = (children: React.ReactNode) => <TheLayout isFooter={false} type="dashboard" children={children}/>;

export default Page;
