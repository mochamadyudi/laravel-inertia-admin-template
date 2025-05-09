import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import {Button, Divider, Flex, Form, Typography} from "antd";
import {FacebookFilled, GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import {Link, router} from "@inertiajs/react";

import Lotties from "@/Components/general/Lotties";
import Animation from "@/assets/lotties/edit.json"
import RegisterForm from "@/Components/data-entry/form/auth/register.form";

const Page = (props: any) => {
  const [form] = Form.useForm();

  function _onFinish() {
    form.validateFields()
      .then((value) => {
        router.post(route('register'),  value, {
          onFinish(){
            // action
            form.resetFields();
            if(typeof(props?.errors) !== 'undefined' && Object.keys(props?.errors).length > 0){
              let fields: {name:string;errors:any}[]  = [];
              Object.entries(props?.errors).map(([k, v]: [string, any])=>{
                fields.push({
                  name: k,
                  errors: [ v ]
                })
              })
              form.setFields(fields);
            }
          },
          onError(e: any){
            form.setFields([
              {
                name: 'email',
                errors: [e?.email]
              }
            ])
          }
        })
      })
  }
  return (
    <React.Fragment>
      <div className="h-screen w-screen  bg-black flex flex-col items-centerj justify-center">
        <div
          className="relative z-[1]  backdrop-blur-xl rounded-lg shadow-lg border border-white/20 border-opacity-20 w-full lg:w-3/4 mx-auto h-full lg:h-3/4">
          <div className="flex justify-center h-full">
            <div className="w-full flex-1 h-full hidden lg:flex flex-col justify-center p-10">
              <div className="space-y-2">
                <Typography
                  className="!text-3xl !font-pro-medium !text-white"
                >Welcome!</Typography>
                <Typography.Paragraph
                  className="!font-sans !text-lg"
                >Create your account to get started<br/>explore the full features of our
                  platform.</Typography.Paragraph>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Lotties width={'100%'} animation={Animation}/>
              </div>
              <div>
                <Typography.Title level={1} className="!text-xl !m-0">Clonesia</Typography.Title>
                <Typography.Paragraph className="!m-0">v1.0</Typography.Paragraph>
              </div>
            </div>
            <Flex className="flex-1 h-full  p-10 bg-opacity-20 bg-white dark:bg-opacity-20 dark:bg-black rounded-lg"
                  align="center" justify="center">
              <div className="space-y-7  w-full max-w-[420px] xl:max-w-[540px] xl:px-0 xl:min-w-[480px]">
                <div className="!space-y-2">
                  <Typography.Title level={2} className={`!text-3xl !m-0 !text-white`}>Sign Up</Typography.Title>
                  <Flex gap={6}>
                    <Typography className="!text-slate-300">Already have an account?</Typography>
                    <Link href={route('register')}>Sign In</Link>
                  </Flex>
                </div>
                <RegisterForm
                  form={form}
                  onFinish={_onFinish}
                  layout="vertical"
                  formClassName="!text-white"
                >
                  <div className="space-y-6">
                    <Button htmlType="submit" type="primary" className="!w-full" icon={<LoginOutlined/>}>Sign
                      Up</Button>
                    <Divider variant="dotted" style={{background: 'transparent'}}>
                      <Typography>or connect with</Typography>
                    </Divider>
                    <Flex justify="center" gap={15}>
                      <Button shape="round" variant="outlined" color="primary" size="large" className="!bg-transparent"
                              icon={<GoogleOutlined/>}>Google</Button>
                      <Button shape="round" variant="outlined" color="blue" size="large" className="!bg-transparent"
                              icon={<FacebookFilled/>}>Facebook</Button>
                    </Flex>
                  </div>
                </RegisterForm>
              </div>
            </Flex>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen z-0 overflow-hidden">
        <img src="/assets/img/abstract-plane.png" alt="/assets/img/abstract-bg.png"
             className="w-full h-full relative transform rotate-180 pointer-events-none lg:-top-0 opacity-70 !object-cover"/>
      </div>
    </React.Fragment>
  )
}

Page.layout = (children: any) => <BaseLayout children={children} mode="dark"/>;

export default Page;
