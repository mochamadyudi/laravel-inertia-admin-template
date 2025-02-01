import React from 'react';
import {Layout} from "antd";

interface FooterLayoutAttr {
  children: React.ReactNode;
  className?: string;
}
const FooterLayout: React.FC<FooterLayoutAttr> = ({ children, className })=> {
  return (
    <Layout.Footer className={[
      'page-header-alt !w-[calc(100%+40px)] -ml-[20px] -mb-[20px] bg-card dark:bg-card-dark',
      className
    ].join(' ')}>
      {children}
    </Layout.Footer>
  )
}

export default FooterLayout;
