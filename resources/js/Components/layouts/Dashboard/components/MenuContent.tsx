import React from 'react';
import {Utils} from "@/Utils";
import {Grid, Menu} from 'antd';
import {useSelector} from "react-redux";
import {NAV_TYPE_SIDE, SIDE_NAV_LIGHT} from "@/Configs/app.config";
interface MenuContentAttr  {
  type: 'SIDE' | 'TOP';
  [k:string]: any;
}

const SideMenu: React.FC<any> = (props)=> {
  const sideNavTheme: string = useSelector(({Theme}: any) => Theme?.sideNavTheme);
  const isMobile = Utils.getBreakPoints(Grid.useBreakpoint()).includes('lg')

  return (
    <Menu
      theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
      mode={'inline'}
    >

    </Menu>
  )
}
const TopNavMenu: React.FC<any> = (props)=> {
  const {sideNavTheme, topNavColor }: any = useSelector(({Theme}: any) => Theme);
  const isMobile = Utils.getBreakPoints(Grid.useBreakpoint()).includes('lg')

  return (
    <Menu
      mode="horizontal"
      style={{ backgroundColor: topNavColor }}
      theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
    >

    </Menu>
  )
}
const MenuContent: React.FC<MenuContentAttr> = (props)=> {
  return props.type === NAV_TYPE_SIDE ? (
    <SideMenu {...props} />
  ) : (
    <TopNavMenu {...props} />
  );
};
export default MenuContent;
