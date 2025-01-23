import React from 'react';
import { Avatar, Divider, Dropdown, Menu } from 'antd';
import { router, usePage } from '@inertiajs/react';
import {Icons} from "@/Components/general/Icons";
const NavProfileComponent: React.FC<any> = () => {
  const user = usePage<any>().props?.user;
  const dropdownRender = function () {
    return (
      <div className={'min-w-[140px] relative top-3.5'}>
        <Menu>
          <Menu.Item
            icon={<Icons type="UserOutlined" />}
            onClick={() => {
              // eslint-disable-next-line no-undef
              router.visit(route('idx.account.profile'));
            }}
          >
            Account
          </Menu.Item>
          <Menu.Item
            icon={<Icons type="LockOutlined" />}
            onClick={() => {
              // eslint-disable-next-line no-undef
              router.visit(route('idx.account.change-password'));
            }}
          >
            Change Password
          </Menu.Item>
          <Divider className={'!my-1.5 !p-0'} />
          <Menu.Item
            danger
            icon={<Icons type="LogoutOutlined" />}
            onClick={() =>
              router.post(
                // eslint-disable-next-line no-undef
                route('logout'),
                {},
                {
                  onFinish(res: any) {},
                }
              )
            }
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    );
  };
  return (
    <div {...({'data-tour-id': 'dropdown-profile-user'})}>
      <Dropdown
        className={'dropdown-profile-user'}
        trigger={['click']}
        placement="bottomRight"
        dropdownRender={dropdownRender}
      >
        <Avatar
          size={35}
          alt={'profile-user'}
          className={'cursor-pointer'}
          src={
            user?.avatar ??
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </Dropdown>
    </div>
  );
};

export default NavProfileComponent;
