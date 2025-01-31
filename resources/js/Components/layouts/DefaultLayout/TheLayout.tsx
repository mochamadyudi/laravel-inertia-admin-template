import React, {useContext} from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import {Grid, Layout} from "antd";
import TheHeader from "@/Components/layouts/DefaultLayout/TheHeader";
import TheContent from "@/Components/layouts/DefaultLayout/TheContent";
import TheSidebar from "@/Components/layouts/DefaultLayout/TheSidebar";
import InitializeProvider, {
  InitializeContext,
  InitializeState
} from "@/Components/providers/initialize.provider";
import {Utils} from "@/Utils";

export type TheLayoutInterface = InitializeState<string | null> & {
  children: React.ReactNode;
  header?: React.ReactNode | null;
  showSidebar?: boolean;
}

const TheLayout: React.FC<TheLayoutInterface> = ({type = 'dashboard', ...props}) => {
  const breakpoints = Grid.useBreakpoint();
  const isDesktop = Utils.getBreakPoints(breakpoints).includes('lg');
  return (
    <BaseLayout>
      <InitializeProvider state={{
        isDesktop: isDesktop,
        type: new URLSearchParams(window.location.search).has('layout-type') ?
          new URLSearchParams(window.location.search).get('layout-type') :
          type ?? 'dashboard',
        isFooter: props?.isFooter ?? false,
        showMenu: props.showMenu ?? true,
        hasContainer: props?.hasContainer ?? false
      }}>
        <TheLayoutLayout {...props}>
          {props.children}
        </TheLayoutLayout>
      </InitializeProvider>

    </BaseLayout>
  )
}

const TheLayoutLayout: React.FC<Pick<TheLayoutInterface, 'children' | 'header' | 'showSidebar'>>
  = ({
       children,
       header = null,
       showSidebar = true,
     }) => {
  const ctx = useContext(InitializeContext);

  return (
    <Layout className={`app ${(!ctx?.isDesktop || ctx?.type === 'page') ? 'without-sider' : ''} ${ctx?.type}`}>
      {
        header ? header : <TheHeader type={ctx?.type as string}/>
      }
      <Layout className={`app-main ${ctx?.type === 'page' && !!ctx?.showMenu ? `app-main-has-topbar` : ''} ${ctx?.type === 'page' ? 'has-container': ''}`}>
        {ctx?.isDesktop ?  (ctx?.type !== 'page' && showSidebar) ? <TheSidebar/> : null: null}
        {
          ctx?.type === 'page' ?
            (
              <TheContent isFooter={ctx.isFooter ?? true}>
                {children}
              </TheContent>
            ) :
            ctx?.hasContainer ?
              <TheContent isFooter={ctx.isFooter ?? true}>
                {children}
              </TheContent>
              :
              <TheContent isFooter={ctx.isFooter ?? true}>
                {children}
              </TheContent>
        }
      </Layout>
    </Layout>
  )
}

export default TheLayout;
