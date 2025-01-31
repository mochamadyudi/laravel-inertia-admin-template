import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import LoginForm from "@/Components/data-entry/form/login.form";
import {Button, Card, Divider, Flex, Form, Typography} from "antd";
import {FacebookFilled, GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import {Link} from "@inertiajs/react";
import RedirectLoginPartial from "@/Pages/Auth/login/partials/redirect-login.partial";
import ModeWidget from "@/Components/general/Widget/mode.widget";

const Page = () => {
  const [form] = Form.useForm();

  function _onFinish(){
    form.validateFields()
      .then((value)=> {
        console.log({ value });
      })
  }
  return (
    <React.Fragment>
      <Flex className="w-full h-screen bg-white dark:bg-transparent lg:px-0 px-4" align="center" justify="center">
        <Card className="flex flex-col border w-full max-w-[450px] lg:w-[450px] pb-10 rounded-xl p-4 lg:p-6 space-y-6 relative z-[1]">
          <div className="space-y-7">
            <Flex align="center" gap={10}>
              <Typography.Title level={1} className="!text-xl !m-0">Clonesia</Typography.Title>
              <Typography.Paragraph className="!m-0">v1.0</Typography.Paragraph>
            </Flex>
            <div className="!space-y-2">
              <Typography.Title level={2} className="!text-2xl !m-0">Sign In</Typography.Title>
              <Flex gap={6}>
                <Typography>Don't have an account yet?</Typography>
                <Link href={route('register')}>Register</Link>
              </Flex>
            </div>
            <LoginForm
              form={form}
              onFinish={_onFinish}
              layout="vertical"
            >
              <div className="space-y-6">
                <Button htmlType="submit" type="primary" className="!w-full" icon={<LoginOutlined/>}>Sign in</Button>
                <Divider variant="dotted" style={{background: 'transparent'}}>
                  <Typography>or connect with</Typography>
                </Divider>
                <Flex justify="center" gap={15}>
                  <Button variant="outlined" color="primary" size="large" icon={<GoogleOutlined/>}>Google</Button>
                  <Button variant="outlined" color="blue" size="large" icon={<FacebookFilled/>}>Facebook</Button>
                </Flex>

              </div>
            </LoginForm>
          </div>
        </Card>
        <div className="fixed top-0 lef-0 w-screen h-screen z-[0]">
          <div className="absolute top-0 left-0">
            <img alt="bg" draggable="false" className="acss-12h0tfz acss-ghc2ux"
                 src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"/>
          </div>
          <div className="absolute bottom-0 right-0">
            <img alt="bg" draggable="false" className="acss-12h0tfz acss-ghc2ux"
                 src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"/>
          </div>
        </div>
      </Flex>
      <RedirectLoginPartial/>
      <ModeWidget style={{ top: 20 }}/>
    </React.Fragment>
  )
}

Page.layout = (children: any) => <BaseLayout children={children}/>;

export default Page;
