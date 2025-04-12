import React, {useContext} from 'react';
import {Layout} from "antd";
import {InitializeContext} from "@/Components/providers/initialize.provider";
import TheFooter from "@/Components/layouts/DefaultLayout/TheFooter";
import {usePage} from "@inertiajs/react";

interface TheContentInterface {
  children: React.ReactNode;
  isFooter?: boolean;
}

const TheContent: React.FC<TheContentInterface> = ({children, isFooter}) => {
  const ctx = useContext(InitializeContext);
  const props = usePage().props;
  // @ts-ignore
  return (
    <Layout.Content className={`app-content ${ctx.hasContainer ? 'has-container' : ''} ${ctx.isFooter ? 'has-footer' : 'no-footer'}`}>
      <Layout
        className={`app-content__content ${!isFooter ? 'no-footer' : 'has-footer'}`}
      >
        <div className={'!h-full flex flex-col'}>
          {
            typeof (props?.content) !== 'undefined' && props?.content ?
              //@ts-ignore
              <div dangerouslySetInnerHTML={{__html: props?.content}}/>
              : children
          }
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
