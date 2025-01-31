import React, {useState} from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Button, Drawer, Form, List, message, Switch, Tooltip, Typography} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";
import {Icons} from "@/Components/general/Icons";
import {ListProps} from "antd/es/list";
import SiteFormAdditional from "@/Pages/Dashboard/Pages/Settings/partials/site-form.additional";

const Page = () => {
  const [form] = Form.useForm();
  const [site, setSite] = useState<any>({
    open: false,
  })
  const data: ListProps<any>['dataSource'] = [
    {
      title: 'Sites',
      icon: 'GlobalOutlined',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
      actions: [
        <Tooltip title="Edit Site">
          <Button
            type="text"
            shape="circle"
            icon={<Icons type={'RightOutlined'} />}
            size="small"
            onClick={()=> setSite((prevState: any)=> ({...prevState, open: !prevState.open}))}
          />
        </Tooltip>
      ]
    },
    {
      title: 'Maintenance',
      icon: 'SettingOutlined',
      description: 'You will receive an alert when someone is following you.',
      actions: [
        <Switch onChange={function(){
          message.info("HAHAHA")
        }}/>
      ]
    }
  ]
  return (
    <React.Fragment>
      <Typography.Title level={1} className="!mb-8 !text-2xl">Additional Setting</Typography.Title>
      <List
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item)=> {
          return (
            <List.Item
              actions={item?.actions ?? []}
            >
              <List.Item.Meta
                avatar={<Icons type={item?.icon} className="!text-3xl !text-[--ant-color-primary]"/>}
                title={<Typography.Paragraph className={'!m-0 !font-pro-medium !text-lg'}>{item?.title}</Typography.Paragraph>}
                description={<Typography>{item?.description}</Typography>}
              />
            </List.Item>
          )
        }}
      />
      <Drawer open={site.open} title={"Site Setting"} onClose={()=> setSite((prev: any)=> ({...prev, open: false}))}>
        <SiteFormAdditional form={form} />
      </Drawer>
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
          activeKey: route('dashboard.pages.setting.additional'),
          defaultSelectedKeys: [route('dashboard.pages.setting.additional')],
          ...menusConfig.menu,
        }
      }}
    />
  )
};

export default Page;
