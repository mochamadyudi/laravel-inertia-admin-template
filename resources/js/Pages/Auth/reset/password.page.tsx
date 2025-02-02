import React from 'react';
import {Button, Form, message, Typography} from 'antd';
import BaseLayout from "@/Components/layouts/base.layout";
import {router} from "@inertiajs/react";
import Lotties from "@/Components/general/Lotties";
import Animation from "@/assets/lotties/finger.json";
import ResetPasswordForm from "@/Components/data-entry/form/auth/reset-password.form";

const Page = ({email, token, ...props}: any) => {
  console.log({ props })
  const [form] = Form.useForm();
  function _onFinish(){
    message.loading({
      key: "submit",
      content: "Loading...",
    }).then( r => r)
    form.validateFields()
      .then((values) => {
        router.post(route('password.email'), values, {
          preserveState: true,
          preserveScroll: true,
          onError(e: any){
            message.error({
              key: "submit",
              content: e?.email,
            }).then( r => r)
            form.setFields([
              {
                name: 'email',
                errors: [e?.email]
              }
            ])
            console.log({ e, props }, 'ERROR')
          }
        })
      })
      .catch((err: any)=> {
        message.error({
          key: "submit",
          content: err?.message,
        }).then( r => r)
      })

  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-layout-dark">
      <div className="w-full max-w-[520px] p-6 rounded-xl mx-auto space-y-10">
        <div className="text-center">
          <div className="flex-1 flex flex-col items-center justify-center">
            <Lotties height={120} width={120} animation={Animation}/>
          </div>
          <Typography.Title level={1} className="!text-2xl">Set New Password</Typography.Title>
          <Typography.Paragraph>Must be at least 8 character.</Typography.Paragraph>
        </div>
        <ResetPasswordForm
          form={form}
          onFinish={_onFinish}
          initialValues={{
            token,
            email
          }}
        >
          <div className="py-4">
            <Button htmlType="submit" type="primary" className="w-full">Reset Password</Button>
          </div>
        </ResetPasswordForm>
      </div>
    </div>
  )
};

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
