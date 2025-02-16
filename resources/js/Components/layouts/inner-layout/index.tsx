import React, {useEffect, useState} from 'react';
import {Layout, Menu, Grid, MenuProps, Flex, Button, Drawer} from "antd";
import Scrollbars from "react-custom-scrollbars";
import {useSelector} from "react-redux";
import {Utils} from "@/Utils";
import {MenuOutlined} from "@ant-design/icons";
import {usePage} from "@inertiajs/react";

const {useBreakpoint} = Grid;

export interface InnerLayoutProps {
  children: React.ReactNode;
  menu: MenuProps;
  sideWidth?: number;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}

const InnerLayout: React.FC<InnerLayoutProps> = ({children, menu, sideWidth = 200, ...props}) => {
  const {currentTheme} = useSelector(({Theme}: any) => Theme);
  const isDesktop = Utils.getBreakPoints(useBreakpoint()).includes('lg')
  const [open, setOpen] = useState<boolean>(false);

  const _props = usePage<any>().props;
  useEffect(() => {
    if (!isDesktop) {
      setOpen(false);
    }
  }, [_props, isDesktop]);
  return (
    <Layout className={'inner-layout'}>
      {
        isDesktop ? (
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
        ) : (
          <Drawer open={open} onClose={() => setOpen((prevState) => !prevState)}>
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
          </Drawer>
        )
      }

      <Layout.Content className={`inner-layout-content ${!isDesktop ? "mobile" : ""}`}>
        {
          !isDesktop && (
            <Flex className="py-4" justify="end">
              <Button
                icon={<MenuOutlined/>}
                onClick={() => setOpen((prevState) => !prevState)}
              />
            </Flex>
          )
        }
        {children}
      </Layout.Content>
    </Layout>
  )
}


export default InnerLayout;
