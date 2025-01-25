import React from 'react';
import {Divider, Flex, Layout, Typography} from "antd";
import {useSelector} from "react-redux";
import LangDropdown from './components/lang.dropdown';
import NavProfileComponent from "@/Components/layouts/Dashboard/components/NavProfile.component";
import SettingDropdown from "@/Components/layouts/Dashboard/components/Setting.dropdown";
import NotificationComponent from "@/Components/layouts/Dashboard/components/Notification.component";
import ThemeModeComponent from "@/Components/layouts/Dashboard/components/ThemeMode.component";
import SiderCollapseComponent from "@/Components/layouts/Dashboard/components/SiderCollapse.component";
import {Utils} from "@/Utils";

const TheHeader: React.FC<any> = (props) => {
  const {navCollapsed}:any = useSelector(({Theme}: any) => Theme);
  return (
    <Layout.Header
      className={`app-header ${navCollapsed ? 'sider-collapsed' : ''}`}
    >
      <div className="nav flex items-center justify-between h-full">
        <div className={`nav-left`}>
          <div
            className={`w-full ${!navCollapsed ? 'px-6' : 'flex items-center justify-center'}`}
          >
            <Typography.Title level={1} className={'!text-2xl !m-0 !p-0'}>{navCollapsed ? Utils.getNameInitial('Clonesia') : 'Clonesia'}</Typography.Title>
          </div>
        </div>
        <div className="nav-right flex justify-between items-center">
          <div>
            {props?.type !== 'page' && (
              <SiderCollapseComponent />
            )}
          </div>
          <Flex gap={20} className={'px-4'} align="center">
            <Flex align={'center'} gap={20}>
              <Flex gap={10} align={'center'}>
                <LangDropdown/>
                <NotificationComponent/>
              </Flex>
              <Divider type={'vertical'}/>
              <Flex align={'center'} gap={20}>
                <ThemeModeComponent/>
                <NavProfileComponent/>
                <SettingDropdown />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </Layout.Header>
  )
}

export default TheHeader
