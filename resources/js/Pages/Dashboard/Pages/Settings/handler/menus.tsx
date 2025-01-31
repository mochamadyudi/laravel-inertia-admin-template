import React from "react";
import {InnerLayoutProps} from "@/Components/layouts/inner-layout";
import {Icons} from "@/Components/general/Icons";
import {router} from "@inertiajs/react";
import {setLocale} from "@/Components/general/intl-message";

export const menusConfig: Omit<InnerLayoutProps, 'children'> = {
  sideWidth: 240,
  menu: {
    items: [
      {
        key: route('dashboard.pages.setting.edit-profile'),
        label: setLocale(true, 'menu.setting.edit-profile', 'Edit Profile'),
        icon: <Icons type={'UserOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.edit-profile'))
        }
      },
      {
        key: route('dashboard.pages.setting.change-password'),
        label: setLocale(true, 'menu.setting.change-password', 'Change Password'),
        icon: <Icons type={'LockOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.change-password'))
        }
      },
      {
        key: route('dashboard.pages.setting.billing'),
        label: setLocale(true, 'menu.setting.billing', 'Billing'),
        icon: <Icons type={'CreditCardOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.billing'))
        }
      },
      {
        key: route('dashboard.pages.setting.notification'),
        label: setLocale(true, 'menu.setting.notification', 'Notification'),
        icon: <Icons type={'BellOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.notification'))
        }
      },
      {
        key: route('dashboard.pages.setting.additional'),
        label: setLocale(true, 'menu.setting.additional-settings', 'Additional Settings'),
        icon: <Icons type={'SettingOutlined'}/>,
        onClick() {
          router.visit(route('dashboard.pages.setting.additional'))
        }
      },
    ]
  }
}
