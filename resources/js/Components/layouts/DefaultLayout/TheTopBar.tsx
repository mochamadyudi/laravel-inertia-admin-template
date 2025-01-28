import React from 'react';
import {Layout} from "antd";
import MenuContent from "@/Components/layouts/DefaultLayout/components/MenuContent";
import {NAV_TYPE_SIDE, NAV_TYPE_TOP} from "@/Configs/app.config";

interface TheTopBarAttr {

}
const TheTopBar: React.FC<TheTopBarAttr> = ( props ) => {
  return (
    <Layout className={'app-header-topbar'}>
      <MenuContent
        type={NAV_TYPE_TOP}
        {...props}
      />
    </Layout>
  )
}
export default TheTopBar;
