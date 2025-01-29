import React from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Typography} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";

const Page = () => {
  return (
    <React.Fragment>
      <Typography.Title level={1}>Notification</Typography.Title>
    </React.Fragment>
  )
}

Page.layout = (children: any) => {
  return (
    <SettingLayoutDefaultLayout
      type="dashboard"
      isFooter
      children={children}
      hasContainer
      inner={menusConfig}
    />
  )
};

export default Page;
