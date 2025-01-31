import React, {useState} from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import LoginForm from "@/Components/data-entry/form/login.form";
import {theme, Button, Col, Row, Divider, Flex, Form, Typography} from "antd";
import {FacebookFilled, GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import {Link, router} from "@inertiajs/react";
import {Utils} from "@/Utils";
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {Icons} from "@/Components/general/Icons";
import RedirectLoginPartial from "@/Pages/Auth/login/partials/redirect-login.partial";
import ModeWidget from "@/Components/general/Widget/mode.widget";
import Lotties from "@/Components/general/Lotties";
import Animation from "@/assets/lotties/dev.json";

const NavLeft = styled.div`
  background: ${(props: any) => props?.theme === 'light' ? props?.light : props?.dark};
  height: 100%;
`;

const Page = ({ziggy, ...props}: any) => {
  const queryParams = ziggy?.queryParams
  const {currentTheme} = useSelector(({Theme}: any) => Theme);
  const [open, setOpen] = useState<boolean>(false);

  const [form] = Form.useForm();
  const {token} = theme.useToken();

  function _onFinish() {
    form.validateFields()
      .then((value) => {
        console.log({value});
        router.post(route('login'),  value, {
          onFinish(){
            // action
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
      <div className="h-screen w-screen bg-white dark:bg-transparent flex flex-col">
        <Row className="flex-1">
          <Col
            xs={{
              order: 1,
              span: 0
            }}
            xl={{
              span: 8,
              order: 1
            }}
          >
            {/*@ts-ignore*/}
            <NavLeft
              theme={currentTheme}
              light={Utils.hexToRGBA(token.colorBgLayout, .4)}
              dark={Utils.hexToRGBA('#000000', .2)}
              className="px-10 py-20 flex flex-col"
            >
              <div className="space-y-2">
                <Typography
                  className="!text-3xl !font-pro-medium"
                  style={{color: currentTheme === 'dark' ? '#fff' : token.colorText}}
                >Welcome back</Typography>
                <Typography.Paragraph
                  className="!font-sans !text-lg"
                >Sign in to access your dashboard and enjoy the full features of our platform. If you don’t have an
                  account yet, register now to get started.</Typography.Paragraph>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <Lotties height={400} animation={Animation}/>
              </div>
              <div>
                <Typography.Title level={1} className="!text-3xl !m-0">Clonesia</Typography.Title>
                <Typography.Paragraph className="!m-0">v1.0</Typography.Paragraph>
              </div>
            </NavLeft>
          </Col>
          <Col
            xs={{
              order: 1,
              span: 24
            }}
            xl={{
              span: 15,
              order: 2
            }}
          >
            <Flex className="h-full" align="center" justify="center">
              <div className="space-y-7 px-4 w-full max-w-[420px] xl:max-w-[540px] xl:px-0 xl:min-w-[480px]">
                {
                  typeof (queryParams?.redirect) !== 'undefined' && (
                    <div className="">
                      <Button href={queryParams?.redirect} type="text"
                              icon={<Icons type={'ArrowLeftOutlined'}/>}>Back</Button>
                    </div>
                  )
                }

                <div className="!space-y-2">
                  <Typography.Title level={2} className="!text-3xl !m-0">Sign In</Typography.Title>
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
                    <Button htmlType="submit" type="primary" className="!w-full" icon={<LoginOutlined/>}>Sign
                      in</Button>
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
            </Flex>
          </Col>
        </Row>
        <div className="absolute top-0 right-0">
          <img alt="bg" draggable="false" className="acss-12h0tfz acss-ghc2ux"
               src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"/>
        </div>
      </div>
      <RedirectLoginPartial/>
      <ModeWidget style={{top: 20}}/>
    </React.Fragment>
  )
}

Page.layout = (children: any) => <BaseLayout children={children}/>;

export default Page;
