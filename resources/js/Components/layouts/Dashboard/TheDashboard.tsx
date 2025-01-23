import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import {Layout} from "antd";
import TheHeader from "@/Components/layouts/Dashboard/TheHeader";
import TheContent from "@/Components/layouts/Dashboard/TheContent";
import {useSelector} from "react-redux";
import {NAV_TYPE_SIDE, NAV_TYPE_TOP} from "@/Configs/app.config";
import TheSidebar from "@/Components/layouts/Dashboard/TheSidebar";

interface TheDashboardInterface {
  children: React.ReactNode;
  isFooter?: boolean;
  showMenuBar?: boolean;
  [k:string]: any;
}

const TheDashboard: React.FC<TheDashboardInterface> = (props)=> {
    return (
        <BaseLayout>
          <TheDashboardLayout {...props} isFooter={props?.isFooter}>
            {props.children}
          </TheDashboardLayout>
        </BaseLayout>
    )
}

const TheDashboardLayout: React.FC<TheDashboardInterface> = ({ isFooter, children, showMenuBar = true }) => {
  const theme: any = useSelector<any>(({Theme})=> Theme);

  return (
    <Layout className={'app'}>
      <TheHeader/>
      <Layout className={`app-main ${theme?.navType === NAV_TYPE_TOP ? `app-main-has-topbar` : ''}`}>
        {
          (theme?.navType === NAV_TYPE_SIDE || showMenuBar) && <TheSidebar />
        }
        <TheContent isFooter={isFooter ?? true}>
          {children}
        </TheContent>
      </Layout>
    </Layout>
  )
}

export default TheDashboard;
