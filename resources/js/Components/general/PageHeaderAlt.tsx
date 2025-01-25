import React from 'react';
import {Flex, Typography} from "antd";
import TheContainer from "@/Components/general/TheContainer";

interface PageHeaderAltAttr {
  type?: 'default' | 'tab'
  className?: string;
  addonAfter?: string | React.ReactNode;
  addonBefore?: string | React.ReactNode;
  title: string | React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
  extra?: React.ReactNode | string;
  container?: boolean;
}
const PageHeaderAlt: React.FC<PageHeaderAltAttr> = ({ title, container, ...props })=> {
  return (
    <div className="page-header">
      <div className={`page-header-alt ${props?.className}`}>
        {
          container ?
            <TheContainer>
              <Flex justify={'space-between'} gap={10} align={'start'}>
                <div className={'page-header-alt--left space-y-2'}>
                  {props?.addonBefore}
                  <Typography.Title level={1} className={'!m-0 !p-0'}>{title}</Typography.Title>
                  {props?.addonAfter}
                </div>
                <div className={'page-header-alt--right'}>
                  {props?.extra}
                </div>
              </Flex>
            </TheContainer>
            :
            <React.Fragment>
              <Flex justify={'space-between'} gap={10} align={'start'}>
                <div className={'page-header-alt--left space-y-2'}>
                  {props?.addonBefore}
                  <Typography.Title level={1} className={'!m-0 !p-0'}>{title}</Typography.Title>
                  {props?.addonAfter}
                </div>
                <div className={'page-header-alt--right'}>
                  {props?.extra}
                </div>
              </Flex>
            </React.Fragment>
        }

      </div>

      {
        props?.children && (
          <div className={[
            'page-header-content',
            props?.contentClassName
          ].join(' ')}>
            {
              container ? (
                <TheContainer>
                  {props?.children}
                </TheContainer>
              ) : props?.children
            }
          </div>
        )
      }

    </div>
  )
}

export default PageHeaderAlt;
