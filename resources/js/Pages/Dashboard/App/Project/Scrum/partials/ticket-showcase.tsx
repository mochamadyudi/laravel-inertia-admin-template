import React from 'react';
import {Button, Collapse, Flex, Space, Typography} from "antd";
import {PaperClipOutlined} from "@ant-design/icons";
import {Icons} from "@/Components/general/Icons";
import {Scrollbars} from "react-custom-scrollbars";
import type {ButtonColorType, ButtonVariantType} from "antd/es/button/buttonHelpers";

type StatusListItem = {
  id?: number;
  label?: string;
  value?: string | number;
  data?: StatusListItem | any;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
}
interface TicketShowcaseInterface {
  id?: number | string;
  title: string;
  description?: string;
  onChangeDescription: (event: any)=> void;
  status?:{
    current?: StatusListItem;
    options?: StatusListItem[];
    onChange?: (item: StatusListItem)=> void;
  };
  detail?:[];
  allowClose?: boolean;
  onClose?: ()=> void;
  action?: {
    current?: Omit<StatusListItem,'variant' | 'color'>;
    options?: StatusListItem[];
    onChange?: (item: StatusListItem)=> void;
  }
}
const TicketShowCase: React.FC<TicketShowcaseInterface> = (props) => {
  return (
    <React.Fragment>
      <div className="space-y-3">
        <Typography.Title level={2}>{props?.title}</Typography.Title>
        <Space>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
            <PaperClipOutlined className="text-xl"/>
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
            <Icons type={'SwitcherOutlined'} className="text-xl"/>
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
            <Icons type={'LinkOutlined'} className="text-xl"/>
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
            <Icons type={'AntDesignOutlined'} className="text-xl"/>
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
            <Icons type={'EllipsisOutlined'} className="text-xl"/>
          </div>
        </Space>
        <Flex>
          {
            props?.status?.current && (
              <Button variant={props?.status?.current?.variant ?? 'filled'} color={props?.status?.current?.color ?? 'blue'}>{props?.status?.current?.label}</Button>
            )
          }

          <Button type={'text'} color={'blue'} icon={<Icons type={'ThunderboltOutlined'}/>}>Actions <Icons
            type={'DownOutlined'} className="text-xs"/></Button>
        </Flex>
      </div>

      <Scrollbars autoHide>
        <div className="h-full space-y-4">
          <Collapse
            bordered={false}
            className=" dark:bg-layout-dark"
            defaultActiveKey={['detail']}
            // expandIcon={({ isActive }: any) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            items={[
              {
                key: 'detail',
                label: 'Detail',
                children: (
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Assignee</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Reporter</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">labels</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Sprint</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Story Point</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Epic Link</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Priority</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                  </div>
                ),
              }
            ]}
          />

          <Collapse
            bordered={false}
            className=" dark:bg-layout-dark"
            defaultActiveKey={['detail']}
            // expandIcon={({ isActive }: any) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            items={[
              {
                key: 'detail',
                label: 'Detail',
                children: (
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Assignee</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Reporter</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">labels</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Sprint</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Story Point</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Epic Link</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-[120px]">
                        <span className="text-sm">Priority</span>
                      </div>
                      <div className="flex-1 border border-red-500"></div>
                    </div>
                  </div>
                ),
              }
            ]}
          />
        </div>
      </Scrollbars>

    </React.Fragment>
  )
};

export default TicketShowCase;
