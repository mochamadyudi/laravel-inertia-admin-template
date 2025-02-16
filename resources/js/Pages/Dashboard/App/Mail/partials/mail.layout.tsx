import React from 'react';
import TheLayout, {TheLayoutInterface} from "@/Components/layouts/DefaultLayout/TheLayout";
import InnerLayout from "@/Components/layouts/inner-layout";
import {Icons} from "@/Components/general/Icons";
import {Button, MenuProps, Typography} from "antd";
import {Link} from "@inertiajs/react";

type MailLayoutType = {
  menu: Omit<MenuProps, 'items'>
} & TheLayoutInterface;
const MailLayout: React.FC<MailLayoutType> = ({...props})=> {
  return (
    <TheLayout type={props?.type} isFooter hasContainer>
      <InnerLayout
        sideWidth={220}
        menu={{
          ...props?.menu,
          items: [
            {
              key: route('dashboard.app.mail.index'),
              label: <Link href={route('dashboard.app.mail.index')}>Inbox</Link>,
              icon: <Icons type={'InboxOutlined'} />
            },
            {
              key: route('dashboard.app.mail.sent'),
              label: <Link href={route('dashboard.app.mail.sent')}>Sent</Link>,
              icon: <Icons type={'MailOutlined'} />
            },
            {
              key: route('dashboard.app.mail.draft'),
              label: <Link href={route('dashboard.app.mail.draft')}>Draft</Link>,
              icon: <Icons type={'FileTextOutlined'} />
            },
            {
              key: route('dashboard.app.mail.starred'),
              label: <Link href={route('dashboard.app.mail.starred')}>Starred</Link>,
              icon: <Icons type={'StarOutlined'} />
            },
            {
              key: route('dashboard.app.mail.deleted'),
              label: <Link href={route('dashboard.app.mail.deleted')}>Deleted</Link>,
              icon: <Icons type={'DeleteOutlined'} />
            },
          ]
        }}
        addonBefore={
          <div className="p-4 w-full">
            <Link href={route('dashboard.app.mail.compose')}>
              <Button type="primary" className="w-full" icon={<Icons type="EditOutlined" /> }>Compose</Button>
            </Link>
          </div>
        }
        addonAfter={<></>}
      >
        {props.children}
      </InnerLayout>
    </TheLayout>
  )
};

export default MailLayout;
