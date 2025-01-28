import React from 'react';
import {Flex, Typography} from "antd";
import TheContainer from "@/Components/general/TheContainer";

type PageHeaderTypePage = {
  background?: string;
}
type PageHeaderProps = {
  className?: string;
  addonAfter?: string | React.ReactNode;
  addonBefore?: string | React.ReactNode;
  title: string | React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
  extra?: React.ReactNode | string;
  container?: boolean;
} & PageHeaderTypePage

type PageHeaderAltAttr = PageHeaderProps & { type?: string };
const PageHeaderAlt: React.FC<PageHeaderAltAttr> = ({container, ...props}) => {
  return (
    <div className="page-header">
      <div className={`page-header-alt ${props?.className}`}>
        {
          container ?
            <TheContainer>
              <div className={'page-header-alt--content'}>
                <Flex justify={'space-between'} gap={10} align={'start'}>
                  <div className={'page-header-alt--left space-y-2'}>
                    {props?.addonBefore}
                    {props?.title&&  <Typography.Title level={1} className={'!m-0 !p-0'}>{props?.title}</Typography.Title> }
                    {props?.addonAfter}
                  </div>
                  <div className={'page-header-alt--right'}>
                    {props?.extra}
                  </div>
                </Flex>
              </div>
              {props?.background && (
                <div className="page-header-alt--bg">
                  <img src={props?.background} alt={props?.background} className={'page-header-alt--bg-img'}/>
                </div>
              )}

            </TheContainer>
            :
            <React.Fragment>
            <div className={'page-header-alt--content'}>
                <Flex justify={'space-between'} gap={10} align={'start'}>
                  <div className={'page-header-alt--left space-y-2'}>
                    {props?.addonBefore}
                    <Typography.Title level={1} className={'!m-0 !p-0'}>{props?.title}</Typography.Title>
                    {props?.addonAfter}
                  </div>
                  <div className={'page-header-alt--right'}>
                    {props?.extra}
                  </div>
                </Flex>
              </div>
              {props?.background && (
                <div className="page-header-alt--bg">
                  <img src={props?.background} alt={props?.background} className={'page-header-alt--bg-img'}/>
                </div>
              )}
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
