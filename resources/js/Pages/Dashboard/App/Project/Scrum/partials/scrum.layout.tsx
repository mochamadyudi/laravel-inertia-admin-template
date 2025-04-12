import React, { Component, ReactNode } from 'react';
import { Link } from "@inertiajs/react";
import { Icons } from "@/Components/general/Icons";
import { Button, Flex, MenuProps, Typography } from "antd";
import InnerLayout from "@/Components/layouts/inner-layout";
import TheLayout, { TheLayoutInterface } from "@/Components/layouts/DefaultLayout/TheLayout";
import { PlusOutlined } from "@ant-design/icons";
import TheBreadCrumbs from "@/Components/general/TheBreadcrumbs";

type ScrumLayoutProps = Omit<TheLayoutInterface, 'type'>;

type ScrumLayoutContentProps = {
  useBreadcrumb?: boolean;
  title?: string | ReactNode;
  extra?: string | ReactNode | (() => ReactNode);
  children: React.ReactNode | (()=> ReactNode);
}
const ScrumLayoutContent: React.FC<ScrumLayoutContentProps> = ({ children, title, extra, useBreadcrumb}) => {
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

class ScrumLayout extends Component<ScrumLayoutProps> {
  static defaultProps = {
    useBreadcrumb: true,
  };

  static Content = ScrumLayoutContent;
  getMenuItems = (): MenuProps['items'] => [
    {
      key: route('dashboard.app.project.scrum.overview'),
      label: <Link href={route('dashboard.app.project.scrum.overview')}>Overview</Link>,
      icon: <Icons type={'AppstoreOutlined'}/>,
    },
    {
      key: route('dashboard.app.project.scrum.roadmap'),
      label: <Link href={route('dashboard.app.project.scrum.roadmap')}>Roadmaps</Link>,
      icon: <Icons type={'AimOutlined'} />,
    },
    {
      key: route('dashboard.app.project.scrum.backlog'),
      label: <Link href={route('dashboard.app.project.scrum.backlog')}>Backlog</Link>,
      icon: <Icons type={'AlignCenterOutlined'} />,
    },
    {
      key: route('dashboard.app.project.scrum.board'),
      label: <Link href={route('dashboard.app.project.scrum.board')}>Board</Link>,
      icon: <Icons type={'MergeCellsOutlined'} />,
    },
    {
      key: route('dashboard.app.project.scrum.reports'),
      label: <Link href={route('dashboard.app.project.scrum.reports')}>Reports</Link>,
      icon: <Icons type={'ProjectOutlined'} />,
    },
    {
      key: route('dashboard.app.project.scrum.setting'),
      label: <Link href={route('dashboard.app.project.scrum.setting')}>Project Setting</Link>,
      icon: <Icons type={'SettingOutlined'} />,
    },
  ];

  render() {
    const { children } = this.props;

    return (
      <TheLayout type="dashboard" isFooter={false}>
        <InnerLayout
          useCollapse
          sideWidth={280}
          className="!rounded-0 app-content-full"
          menu={{ items: this.getMenuItems() }}
          addonBefore={({ isCollapse, isDesktop }) => {
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
          addonAfter={() => <></>}
        >
          {children}
        </InnerLayout>
      </TheLayout>
    );
  }
}

export default ScrumLayout;
