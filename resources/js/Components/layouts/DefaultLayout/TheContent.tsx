import React, {useContext} from 'react';
import {Layout} from "antd";
import {InitializeContext} from "@/Components/providers/initialize.provider";
import TheFooter from "@/Components/layouts/DefaultLayout/TheFooter";

interface TheContentInterface {
  children: React.ReactNode;
  isFooter?: boolean;
}

const TheContent: React.FC<TheContentInterface> = ({children, isFooter}) => {
  const ctx = useContext(InitializeContext);
  return (
    <Layout.Content className={"app-content"}>
      <Layout
        className={`app-content__content ${!isFooter ? 'no-footer' : ''}`}
      >
        {children}
      </Layout>
      {!isFooter ? null :
        ctx.type === 'page' ?
          <TheFooter container/>
          :
          <TheFooter container={ctx.hasContainer ?? false}/>
      }
    </Layout.Content>
  )
};

export default TheContent;
