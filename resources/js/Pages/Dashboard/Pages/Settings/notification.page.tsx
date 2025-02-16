import React from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Avatar, List, message, Switch, Typography} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";
import {Icons} from "@/Components/general/Icons";
import {ListProps} from "antd/es/list";

const Page = () => {

  const data: ListProps<any>['dataSource'] = [
    {
      title: 'Followers',
      icon: 'UserAddOutlined',
      description: 'You will receive an alert when someone is following you.',
      actions: [
        <Switch onChange={function(){
          message.info("HAHAHA")
        }}/>
      ]
    },
    {
      title: 'Comments',
      icon: 'MessageOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Switch/>
      ]
    },
    {
      title: 'Email Notifications',
      icon: 'MailOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Switch/>
      ]
    },
    {
      title: 'Groups Invitation',
      icon: 'UsergroupAddOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Switch/>
      ]
    },
    {
      title: 'New Product',
      icon: 'ShoppingCartOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Switch/>
      ]
    },
    {
      title: 'Tasks',
      icon: 'FileProtectOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Switch/>
      ]
    },
  ]
  return (
    <React.Fragment>
      <Typography.Title level={1} className="!mb-8 !text-2xl">Notification</Typography.Title>
      <section>
        <List
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(item)=> {
            return (
              <List.Item
                actions={item?.actions ?? []}
              >
                <List.Item.Meta
                  avatar={<Icons type={item?.icon} className="!text-3xl !text-primary"/>}
                  title={<Typography.Paragraph className={'!m-0 !font-pro-medium !text-lg'}>{item?.title}</Typography.Paragraph>}
                  description={<Typography>{item?.description}</Typography>}
                />
              </List.Item>
            )
          }}
        />
      </section>
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
      inner={{
        ...menusConfig,
        menu:{
          activeKey: route('dashboard.pages.setting.notification'),
          defaultSelectedKeys: [route('dashboard.pages.setting.notification')],
          ...menusConfig.menu,
        }
      }}
    />
  )
};

export default Page;
