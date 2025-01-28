import React from 'react';
import {
  Badge,
  Button,
  Divider,
  Dropdown,
  Empty,
  Flex,
  Typography,
} from 'antd';
import { Icons } from '@/Components/general/Icons';

const NotificationComponent: React.FC<any> = props => {
  const dropdownRender = function () {
    return (
      <div
        className={
          'bg-white shadow border border-slate-200 rounded-lg relative top-4 w-[380px]'
        }
      >
        <Flex justify={'space-between'} align={'center'} className={'p-4'}>
          <Flex gap={10}>
            <Icons type={'BellOutlined'} className={'!text-lg'} />
            <Typography className={'!text-base !tracking-tight font-semibold'}>
              Notifications
            </Typography>
          </Flex>
          <Button type={'text'} className={'!text-sm'}>Read All</Button>
        </Flex>
        <Divider className={'!m-0'} />
        <div className={'!h-[320px] !overflow-y-auto !p-4 !space-y-4'}>
          <Empty />
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Dropdown
        placement={'bottomRight'}
        trigger={['click']}
        dropdownRender={dropdownRender}
      >
        <Button
          size={'large'}
          type={'text'}
          shape={'circle'}
          icon={
            <Badge dot>
              <Icons type={'BellOutlined'} className={'!text-xl'}/>
            </Badge>
          }
        />
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationComponent;
