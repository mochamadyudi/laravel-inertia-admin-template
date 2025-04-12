import React, {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {Layout, Menu, Grid, MenuProps, Flex, Button, Drawer} from "antd";
import Scrollbars from "react-custom-scrollbars";
import {useSelector} from "react-redux";
import {Utils} from "@/Utils";
import {MenuOutlined, RightOutlined} from "@ant-design/icons";
import {usePage} from "@inertiajs/react";

const {useBreakpoint} = Grid;

export interface InnerLayoutProps {
  children: React.ReactNode;
  menu: MenuProps;
  sideWidth?: number;
  addonAfter?: ReactNode | ((options :{ isCollapse: boolean, isDesktop?: boolean }) => ReactNode);
  // @ts-ignore
  addonBefore?: ReactNode | ((options :{ isCollapse: boolean, isDesktop?: boolean}) => ReactNode);
  className?: string;
  useCollapse?: boolean;
}

const InnerLayout: React.FC<InnerLayoutProps> = ({children, menu, sideWidth = 200, useCollapse = false, ...props}) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const {currentTheme} = useSelector(({Theme}: any) => Theme);
  const isDesktop = Utils.getBreakPoints(useBreakpoint()).includes('lg')
  const [open, setOpen] = useState<boolean>(false);

  const _props = usePage<any>().props;
  useEffect(() => {
    if (!isDesktop) {
      setOpen(false);
    }
  }, [_props, isDesktop]);

  const onChangeCollapse = () => {
    setCollapse(prevState => !prevState);
  }
  return (
    <React.Fragment>
      <Layout className={`inner-layout ${props?.className ?? ""}`}>
        {
          isDesktop && (
            <Layout.Sider width={sideWidth} collapsed={collapse} className={'inner-layout-sider relative'}>
              <Scrollbars autoHide className={'!m-0'}>
                <div className="flex flex-col">
                  {typeof(props?.addonBefore) !== 'undefined' ?
                    typeof(props?.addonBefore) == "function" ?
                      props?.addonBefore({ isCollapse : collapse, isDesktop: isDesktop }) :
                      props?.addonBefore : null
                  }
                  <div className="flex-1">
                    <Menu
                      key={'inner-layout'}
                      {...menu}
                      theme={menu?.theme ?? currentTheme}
                    />
                  </div>
                  {typeof(props?.addonAfter) !== 'undefined' ?
                    typeof(props?.addonAfter) == "function" ?
                      props?.addonAfter({ isCollapse : collapse, isDesktop: isDesktop }) :
                      props?.addonAfter : null
                  }
                </div>
              </Scrollbars>
              { useCollapse && (
                <div
                  onClick={onChangeCollapse}
                  className="flex items-center justify-center absolute top-[60px] -right-[16px] w-[32px] h-[32px] border border-color-default cursor-pointer bg-white dark:bg-card-dark rounded-full">
                  <RightOutlined className="!text-xs transition duration-200" style={{
                    transform: `rotate(${!collapse ? '180deg': '0deg'})`,
                  }}/>
                </div>
              )}
            </Layout.Sider>
          )
        }

        <Layout.Content className={`inner-layout-content ${!isDesktop ? "mobile" : ""} h-full flex flex-col`}>
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
      { !isDesktop && (
        <Drawer open={open} onClose={() => setOpen((prevState) => !prevState)}>
          <Scrollbars autoHide className={'!m-0'}>
            <div className="flex flex-col">
              {typeof(props?.addonBefore) !== 'undefined' ?
                typeof(props?.addonBefore) == "function" ?
                  props?.addonBefore({ isCollapse : collapse }) :
                  props?.addonBefore : null
              }

              <div className="flex-1">
                <Menu
                  key={'inner-layout'}
                  {...menu}
                  theme={menu?.theme ?? currentTheme}
                />
              </div>
              {typeof(props?.addonAfter) !== 'undefined' ?
                typeof(props?.addonAfter) == "function" ?
                  props?.addonAfter({ isCollapse : collapse }) :
                  props?.addonAfter : null
              }
            </div>
          </Scrollbars>
        </Drawer>
      )}

    </React.Fragment>

  )
}


export default InnerLayout;
