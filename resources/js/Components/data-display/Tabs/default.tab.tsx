import {Tabs as Tab, TabsProps} from 'antd';
import React from 'react';
import {router, usePage} from "@inertiajs/react";
import styled from 'styled-components';
import {useSelector} from "react-redux";

interface DefaultTabProps {
  tabs: TabsProps;
  tabKey: 'tab' | string;
  parameter: any;
  isDefault?: boolean;
}
const DefaultTab: React.FC<DefaultTabProps> = ({isDefault = false, ...props})=> {
  const ziggy = usePage<any>().props.ziggy;
  const qs = ziggy?.queryParams;
  const { currentTheme }: { currentTheme: 'dark' | 'light' } = useSelector(({Theme}: any)=> Theme);
  function _onTabClick(val: string){
    router.replace(
      // @ts-ignore
      // eslint-disable-next-line no-undef
      route(route().current(), { ...props?.parameter }),
      {
        preserveState: true,
        preserveScroll: true,
        only: ['collections', 'ziggy', val],
        queryStringArrayFormat: 'brackets',
        data: {
          [props?.tabKey]: val,
        },
      }
    );
  }
  return (
    <React.Fragment>
      <Tabs
        {...props.tabs}
        //@ts-ignore
        mode={currentTheme}
        //@ts-ignore
        isDefault={isDefault}
        activeKey={typeof(qs[props?.tabKey]) !== 'undefined' ? qs[props?.tabKey] : props?.tabs?.defaultActiveKey}
        onTabClick={_onTabClick}
        defaultActiveKey={props.tabs.defaultActiveKey}
      />
    </React.Fragment>
  )
}

const Tabs = styled(Tab)`
  .ant{
    &-tabs{
      &-ink{
        &-bar{
          padding: 0 10px !important;
        }
      }
      &-nav{
        &:before{
          //@ts-ignore
          border-bottom: var(--ant-line-width) var(--ant-line-type) ${
            //@ts-ignore
            (props: DefaultTabProps) => props.isDefault ? "inherit" : props?.mode === "dark" ? "var(--ant-color-primary-border)":"var(--ant-color-primary-border)"
        };
        }
      }
    }
  }
`

export default DefaultTab;
