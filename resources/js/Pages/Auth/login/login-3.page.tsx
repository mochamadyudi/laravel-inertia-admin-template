import React, {useEffect, useState} from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import LoginForm from "@/Components/data-entry/form/login.form";
import {theme, Button, Divider, Flex, Form, Typography} from "antd";
import {FacebookFilled, GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import {Link} from "@inertiajs/react";
import styled from 'styled-components';
import {useSelector} from "react-redux";
import RedirectLoginPartial from "@/Pages/Auth/login/partials/redirect-login.partial";

const NavLeft = styled.div`
  background: ${(props: any) => props?.theme === 'light' ? props?.light : props?.dark};
  height: 100%;
`;

const Page = ({ziggy}: any) => {
  const queryParams = ziggy?.queryParams
  const {currentTheme} = useSelector(({Theme}: any) => Theme);
  const [open, setOpen] = useState<boolean>(false);

  const [form] = Form.useForm();
  const {token} = theme.useToken();

  return (
    <React.Fragment>
      <div className="h-screen w-screen  bg-black flex flex-col items-centerj justify-center">
        <div className="relative z-[1]  backdrop-blur-xl rounded-lg shadow-lg border border-white/20 border-opacity-20 w-3/4 mx-auto h-3/4">
          <div className="flex justify-center h-full">
            <div className="w-full flex-1 h-full">
              <p>testing</p>
            </div>
            <Flex className="flex-1 h-full  bg-opacity-20 bg-white dark:bg-opacity-20 dark:bg-black rounded-lg" align="center" justify="center">
              <div className="space-y-7  w-full max-w-[420px] xl:max-w-[540px] xl:px-0 xl:min-w-[480px]">
                <div className="!space-y-2">
                  <Typography.Title level={2} className={`!text-3xl !m-0 !text-white`}>Sign In</Typography.Title>
                  <Flex gap={6}>
                    <Typography className="!text-slate-300">Don't have an account yet?</Typography>
                    <Link href={route('register')}>Register</Link>
                  </Flex>
                </div>
                <LoginForm
                  form={form}
                  layout="vertical"
                  formClassName="!text-white"
                >
                  <div className="space-y-6">
                    <Button htmlType="submit" type="primary" className="!w-full" icon={<LoginOutlined/>}>Sign
                      in</Button>
                    <Divider variant="dotted" style={{background: 'transparent'}}>
                      <Typography>or connect with</Typography>
                    </Divider>
                    <Flex justify="center" gap={15}>
                      <Button shape="round" variant="outlined" color="primary" size="large" className="!bg-transparent" icon={<GoogleOutlined/>}>Google</Button>
                      <Button shape="round" variant="outlined" color="blue" size="large" className="!bg-transparent" icon={<FacebookFilled/>}>Facebook</Button>
                    </Flex>

                  </div>
                </LoginForm>
              </div>
            </Flex>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen z-0 overflow-hidden">
        <img src="/assets/img/abstract-plane.png" alt="/assets/img/abstract-bg.png" className="w-full h-full relative transform rotate-180 -top-[60%] opacity-70 !object-cover"/>
      </div>
      <RedirectLoginPartial/>
    </React.Fragment>
  )
}

Page.layout = (children: any) => <BaseLayout children={children} mode="dark"/>;

export default Page;
