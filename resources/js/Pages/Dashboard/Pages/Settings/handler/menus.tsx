import React from "react";
import {InnerLayoutProps} from "@/Components/layouts/inner-layout";
import {Icons} from "@/Components/general/Icons";
import {router} from "@inertiajs/react";

export const menusConfig: Omit<InnerLayoutProps, 'children'> = {
  sideWidth: 240,
  menu: {
    items: [
      {
        key: route('dashboard.pages.setting.edit-profile'),
        label: 'Edit Profile',
        icon: <Icons type={'UserOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.edit-profile'))
        }
      },
      {
        key: route('dashboard.pages.setting.change-password'),
        label: 'Change Password',
        icon: <Icons type={'LockOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.change-password'))
        }
      },
      {
        key: route('dashboard.pages.setting.notification'),
        label: 'Notification',
        icon: <Icons type={'BellOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.notification'))
        }
      },
      {
        key: route('dashboard.pages.setting.additional'),
        label: 'Additional Settings',
        icon: <Icons type={'SettingOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.additional'))
        }
      },
    ]
  }
}
