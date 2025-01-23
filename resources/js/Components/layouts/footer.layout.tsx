import React from 'react';
import {Layout} from "antd";

interface FooterLayoutAttr {
  children: React.ReactNode;
}
const FooterLayout: React.FC<FooterLayoutAttr> = ({ children })=> {
  return (
    <Layout.Footer className={'!w-[calc(100%+40px)] -ml-[20px] bg-white dark:bg-slate-700'}>
      {children}
    </Layout.Footer>
  )
}

export default FooterLayout;
