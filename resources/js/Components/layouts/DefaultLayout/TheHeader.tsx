import React, {useContext} from 'react';
import {Divider, Flex, Layout, Typography} from "antd";
import {useSelector} from "react-redux";
import LangDropdown from './components/lang.dropdown';
import NavProfileComponent from "@/Components/layouts/DefaultLayout/components/NavProfile.component";
import SettingDropdown from "@/Components/layouts/DefaultLayout/components/Setting.dropdown";
import NotificationComponent from "@/Components/layouts/DefaultLayout/components/Notification.component";
import ThemeModeComponent from "@/Components/layouts/DefaultLayout/components/ThemeMode.component";
import SiderCollapseComponent from "@/Components/layouts/DefaultLayout/components/SiderCollapse.component";
import {Utils} from "@/Utils";
import TheTopBar from "@/Components/layouts/DefaultLayout/TheTopBar";
import {InitializeContext} from "@/Components/providers/initialize.provider";

interface TheHeaderProps {
  type: 'page' | 'dashboard' | string | null;
  [k:string]: any
}
const TheHeader: React.FC<TheHeaderProps> = ({type = 'dashboard', container = false, ...props}) => {
  const {navCollapsed}:any = useSelector(({Theme}: any) => Theme);
  const ctx = useContext(InitializeContext)

  return (
    <React.Fragment>
      <Layout.Header
        className={[
          'app-header',
          type,
          navCollapsed ? 'sider-collapsed' : '',
          type === 'page' ? 'has-container' : ''
        ].join(' ')}
      >
        <div className="nav flex items-center justify-between h-full">
          {
            ctx.isDesktop && (
              <div className={`nav-left`}>
                <div
                  className={`w-full ${!navCollapsed ? 'px-6' : 'flex items-center justify-center'}`}
                >
                  <Typography.Title level={2}
                                    className={'!text-2xl !m-0 !p-0'}>{(type !== 'page' && navCollapsed) ? Utils.getNameInitial('Clonesia') : 'Clonesia'}</Typography.Title>
                </div>
              </div>
            )
          }

          <div className="nav-right flex justify-between items-center">
            <div>
              {type !== 'page' && (
                <SiderCollapseComponent/>
              )}
            </div>
            <Flex gap={20} align="center">
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
      {(ctx?.type === 'page' && ctx.showMenu) && <TheTopBar/>}
    </React.Fragment>
  )
}

export default TheHeader
