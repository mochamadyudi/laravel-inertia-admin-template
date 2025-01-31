import React, {useState} from 'react';
import BaseLayout from "@/Components/layouts/base.layout";
import LoginForm from "@/Components/data-entry/form/login.form";
import {theme, Button, Col, Row, Divider, Flex, Form, Typography, FloatButton, message} from "antd";
import {FacebookFilled, GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import {Link, router} from "@inertiajs/react";
import {Utils} from "@/Utils";
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {Icons} from "@/Components/general/Icons";
import RedirectLoginPartial from "@/Pages/Auth/login/partials/redirect-login.partial";
import ModeWidget from "@/Components/general/Widget/mode.widget";

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
                <svg className="max-w-[420px]" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" width="540.12644"
                     height="510.99178" viewBox="0 0 540.12644 510.99178" role="img">
                  <path
                    d="m482.17362,189.89542H57.93468c-31.40286,0-56.93468,25.54973-56.93468,56.95282v165.20507c0,31.40308,25.53182,56.93512,56.93468,56.93512h424.23894c31.40286,0,56.95282-25.53204,56.95282-56.93512v-165.20507c0-31.40308-25.54996-56.95282-56.95282-56.95282Z"
                    fill="#fff" stroke-width="0"/>
                  <path
                    d="m482.17362,189.89542H57.93468c-31.40286,0-56.93468,25.54973-56.93468,56.95282v165.20507c0,31.40308,25.53182,56.93512,56.93468,56.93512h424.23894c31.40286,0,56.95282-25.53204,56.95282-56.93512v-165.20507c0-31.40308-25.54996-56.95282-56.95282-56.95282Z"
                    fill="none" stroke="#2f2e43" stroke-miterlimit="10" stroke-width="2"/>
                  <line x1="42.94787" y1="319.41121" x2="480.28926" y2="319.41121" fill="none" stroke="#2f2e43"
                        stroke-miterlimit="10" stroke-width="2"/>
                  <line x1="42.94787" y1="352.24655" x2="480.28926" y2="352.24655" fill="none" stroke="#2f2e43"
                        stroke-miterlimit="10" stroke-width="2"/>
                  <line x1="42.94787" y1="385.0819" x2="480.28926" y2="385.0819" fill="none" stroke="#2f2e43"
                        stroke-miterlimit="10" stroke-width="2"/>
                  <line x1="42.94787" y1="417.91724" x2="342.11436" y2="417.91724" fill="none" stroke="#2f2e43"
                        stroke-miterlimit="10" stroke-width="2"/>
                  <circle cx="61.18973" cy="253.74051" r="25.5386" fill="#ff6363" stroke-width="0"/>
                  <path
                    d="m136.45266,410.34524l62.44259-105.55768-41.01333-6.83556-54.09854,121.06618-8.11333,16.24779c-6.15161,1.94892-11.88851,6.78271-15.3444,13.70365-6.04703,12.10977-2.82465,25.98351,7.19714,30.98779,10.02192,5.00442,23.04817-.75557,29.09519-12.86534,3.45588-6.92094,3.87267-14.41138,1.73476-20.49957l18.09993-36.24727Z"
                    fill="#e09093" stroke-width="0"/>
                  <path
                    d="m398.04894,410.34524l-62.44259-105.55768,41.01333-6.83556,54.09854,121.06618,8.11333,16.24779c6.15161,1.94892,11.88851,6.78271,15.3444,13.70365,6.04703,12.10977,2.82465,25.98351-7.19714,30.98779-10.02192,5.00442-23.04817-.75557-29.09519-12.86534-3.45588-6.92094-3.87267-14.41138-1.73476-20.49957l-18.09993-36.24727Z"
                    fill="#e09093" stroke-width="0"/>
                  <path
                    d="m368.53939,510.99178h-195.90143l-4.22223-42.00335-.36232-3.53364c-1.5944-15.90991-1.25021-31.85588,1.01486-47.53021,1.61254-11.12605,4.16782-22.10722,7.66496-32.83446,2.88111-8.82493,6.39661-17.45012,10.52816-25.83995l3.46087-7.01265,11.59721-23.52068,10.99909-9.31378,3.8055-3.22551,26.67342,3.22551,77.01241,9.31378,9.85748,23.52068,13.78995,32.8526,10.65468,25.42321c6.6866,15.98224,10.49188,32.99748,11.2528,50.30271l.36254,8.17239,1.81206,42.00335Z"
                    fill="#2f2e43" stroke-width="0"/>
                  <path
                    d="m335.9207,71.42848c0-29.04738-23.5476-52.59498-52.59508-52.59498-29.04738,0-52.59498,23.5476-52.59498,52.59498,0,18.3078,9.35925,34.42413,23.54898,43.84374-6.00462,16.08449-17.20509,30.35064-17.20509,30.35064l51.83252,43.19425,10.16811-67.19499c21.35286-6.69337,36.84555-26.63304,36.84555-50.19361v-.00003Z"
                    fill="#e09093" stroke-width="0"/>
                  <path
                    d="m215.98414,139.59497s-56.96296-2.27852-66.07703,63.79852c-9.11407,66.07703-59.24148,87.80622,0,105.42311,59.24148,17.61689,56.96296,6.22429,56.96296,6.22429l-4.55704,13.67111h118.50404l6.81448-22.78518s97.97629,11.39259,84.30518-34.17778c-13.67111-45.57037-36.45629-88.86222-36.45629-88.86222,0,0-24.06367-41.0323-49.62739-43.30133s-109.8689.00948-109.8689.00948Z"
                    fill="#FFC600" stroke-width="0"/>
                  <path
                    d="m210.25518,297.16908c-8.47696-33.97633-16.95393-67.95266-25.43089-101.92899-4.27155-17.12069-8.56929-34.88423-5.34994-52.23358,3.21935-17.34935,16.1626-34.21863,33.71389-36.03974l-.46637-1.96377c9.4588-9.37041,11.53004-23.78457,11.80865-37.09606.27862-13.31149-.61954-27.161,4.66335-39.38248C236.31514,12.05003,254.03514,1.6957,271.92112.20886c.63879-.0531,1.27749-.09627,1.91601-.12971,25.82626-1.35264,49.40267,14.75329,58.40217,38.99859,3.24284,8.73644,6.67458,18.23669,9.11882,25.66959,6.12883,18.63768,7.51176,39.56503-.30948,57.5582-6.7523,15.53402-19.63349,27.52579-28.28651,42.08686-18.05203,30.37744-14.95421,71.90415,7.40514,99.26697l-1.98918-2.98376c-19.00856.7034-36.18681,10.79986-52.91245,19.85928-16.72564,9.05941-35.24138,17.57867-54.05373,14.76527l-.95672,1.86895Z"
                    fill="#2f2e43" stroke-width="0"/>
                </svg>
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
