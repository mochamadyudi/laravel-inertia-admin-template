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
    <Layout.Content className={`app-content ${ctx.hasContainer ? 'has-container' : ''}`}>
      <Layout
        className={`app-content__content ${!isFooter ? 'no-footer' : ''}`}
      >
        <div className={'!h-full'}>
          {children}
        </div>
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
