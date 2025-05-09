import React, {Component, ReactNode} from 'react';
import {Link} from "@inertiajs/react";
import {Icons} from "@/Components/general/Icons";
import {Button, Flex, MenuProps, Tooltip, Typography} from "antd";
import InnerLayout from "@/Components/layouts/inner-layout";
import {PlusOutlined} from "@ant-design/icons";
import TheBreadCrumbs from "@/Components/general/TheBreadcrumbs";
import {connect, useDispatch, useSelector} from "react-redux";
import {onProjectFullScreen, onProjectSiderCollapse} from "@/Redux/actions/project";
import TheFullScreen from "@/Components/layouts/TheFullscreen";
import hoistNonReactStatics from 'hoist-non-react-statics';


type ScrumLayoutProps = { project?: any; children: React.ReactNode; onProjectSiderCollapse?: (payload: boolean)=> void; onProjectFullScreen?: (payload?: boolean) => void };

type ScrumLayoutContentProps = {
  useBreadcrumb?: boolean;
  title?: string | ReactNode;
  extra?: string | ReactNode | (() => ReactNode);
  children: React.ReactNode | (() => ReactNode);
}
export const ScrumLayoutContent: React.FC<ScrumLayoutContentProps> = ({
                                                                 children,
                                                                 title,
                                                                 extra,
                                                                 useBreadcrumb,
                                                               }) => {

  return (
    <div className="h-full flex-1 flex flex-col">
      {useBreadcrumb && <TheBreadCrumbs/>}
      <div className="space-y-4 flex-1 flex flex-col h-full">
        <Flex justify="space-between">
          {title && <Typography.Title level={1}>{title}</Typography.Title>}
          {typeof extra !== 'undefined' ? (typeof extra === 'function' ? extra() : extra) : null}
        </Flex>
        {typeof children !== 'undefined' ?
          <section className="flex flex-col  h-full flex-1">
            {(typeof children === 'function' ? children() : children)}
          </section>
          : null
        }
      </div>
    </div>
  )
}

const ScrumLayout: React.FC<ScrumLayoutProps> = ({ children, ...props}) => {
  const project: any = useSelector((state: any)=> state?.Project);
  const dispatch = useDispatch();

  const menuItems: MenuProps['items'] = [
    {
      key: route('dashboard.app.project.scrum.overview'),
      label: <Link href={route('dashboard.app.project.scrum.overview')}>Overview</Link>,
      icon: <Icons type={'AppstoreOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.roadmap'),
      label: <Link href={route('dashboard.app.project.scrum.roadmap')}>Roadmaps</Link>,
      icon: <Icons type={'AimOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.backlog'),
      label: <Link href={route('dashboard.app.project.scrum.backlog')}>Backlog</Link>,
      icon: <Icons type={'AlignCenterOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.board'),
      label: <Link href={route('dashboard.app.project.scrum.board')}>Board</Link>,
      icon: <Icons type={'MergeCellsOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.reports'),
      label: <Link href={route('dashboard.app.project.scrum.reports')}>Reports</Link>,
      icon: <Icons type={'ProjectOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.setting'),
      label: <Link href={route('dashboard.app.project.scrum.setting')}>Project Setting</Link>,
      icon: <Icons type={'SettingOutlined'}/>,
    },
  ];

  return (
    <TheFullScreen isBrowserFullscreen={false}>
      <InnerLayout
        useCollapse
        onChangeCollapsed={(collapsed)=> {
          //@ts-ignore
          dispatch(onProjectSiderCollapse(collapsed))
        }}
        defaultCollapsed={project?.sider?.collapsed ?? false}
        sideWidth={280}
        className="!rounded-0 app-content-full"
        menu={{items: menuItems}}
        addonBefore={({isCollapse, isDesktop}) => {
          return (
            <div className="p-4 w-full">
              <Button
                type="primary"
                className="w-full"
                icon={<PlusOutlined/>}
              >
                {isCollapse && isDesktop ? '' : 'Create Project'}
              </Button>
            </div>
          )
        }}
        addonAfter={({isCollapse, isDesktop})=> {

          return (
            <div className="p-4 w-full">
              <Tooltip title={'Fullscreen mode'}>
                <Button
                  className="w-full"
                  icon={<Icons
                    type={!project?.setting?.fullscreen ? 'DesktopOutlined' : 'CloseOutlined'}
                    className={'text-lg'}
                  />}
                  onClick={() => {
                    // @ts-ignore
                    dispatch(onProjectFullScreen(!project?.setting?.fullscreen))
                  }}
                >{isCollapse ? '' : "Fullscreen"}</Button>
              </Tooltip>
            </div>
          )
        }}
      >
        {children}
      </InnerLayout>
    </TheFullScreen>
  );
}

export default ScrumLayout;
