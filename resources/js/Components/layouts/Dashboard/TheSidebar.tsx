import React from 'react';
import {Layout} from "antd";
import {Scrollbars} from 'react-custom-scrollbars';
import {NAV_TYPE_SIDE, SIDE_NAV_WIDTH} from "@/Configs/app.config";
import MenuContent from "@/Components/layouts/Dashboard/components/MenuContent";
import {useSelector} from "react-redux";

interface TheSidebarAttr {
}

const TheSidebar: React.FC<TheSidebarAttr> = (props) => {
  const navCollapsed:boolean = useSelector(({Theme}: any) => Theme?.navCollapsed ?? false)
  return (
    <Layout.Sider
      className={`app-sider hidden md:block ${navCollapsed ? 'collapsed' : ''}`}
      // width={SIDE_NAV_WIDTH}
      collapsed={navCollapsed}

    >
      <Scrollbars autoHide className={'!m-0'}>
        <MenuContent
          type={NAV_TYPE_SIDE}
          {...props}
        />
      </Scrollbars>
    </Layout.Sider>
  )
}
export default TheSidebar;
