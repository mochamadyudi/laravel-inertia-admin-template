import React from 'react';
import {Layout, Menu, MenuProps} from "antd";
import Scrollbars from "react-custom-scrollbars";
import {useSelector} from "react-redux";

export interface InnerLayoutProps {
  children: React.ReactNode;
  menu: MenuProps;
  sideWidth?: number;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}
const InnerLayout: React.FC<InnerLayoutProps> = ({ children, menu, sideWidth = 200, ...props }) => {
  const { currentTheme } = useSelector(({Theme}: any) => Theme);
  return (
    <Layout className={'inner-layout'}>
      <Layout.Sider width={sideWidth} className={'inner-layout-sider'}>
        <Scrollbars autoHide className={'!m-0'}>
          <div className="flex flex-col">
            {props?.addonBefore}
            <div className="flex-1">
              <Menu
                key={'inner-layout'}
                {...menu}
                theme={menu?.theme ?? currentTheme}
              />
            </div>
            {props?.addonAfter}
          </div>
        </Scrollbars>
      </Layout.Sider>
      <Layout.Content className={'inner-layout-content'}>
        {children}
      </Layout.Content>
    </Layout>
  )
}


export default InnerLayout;
