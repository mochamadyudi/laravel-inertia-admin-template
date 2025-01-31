import React, {useState} from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Typography, Form, Row, Col, Input, Button, message} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";
import {Icons} from "@/Components/general/Icons";
import {setLocale} from "@/Components/general/intl-message";
import {useIntl} from "react-intl";

const Page = () => {
  const intl = useIntl();
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  function _onFinish() {
    form.validateFields().then((values: any) => {
      message.loading({
        key: 'submit',
        content: "Loading..."
      })
        .then(r => r)

      setLoading(true);
      let timeout = setTimeout(() => {
        setLoading(false);
        message.success({
          key: "submit",
          content: "Successfully Change Password",
          duration: 2000
        }).then(r => r)
        form.resetFields();
        clearTimeout(timeout)
      }, 2000)
      // eslint-disable-next-line no-undef
      // router.post(route('idx.account.change-password.action'), values, {
      //   replace: true,
      //   preserveState: true,
      //   onFinish: function () {
      //     setLoading(false);
      //     form.resetFields();
      //   },
      //   onError: function (e) {
      //     message
      //       .error({
      //         key: '@change-password',
      //         content: e?.message,
      //         duration: 10,
      //       })
      //       .then(r => r);
      //     setLoading(false);
      //   },
      // });
    });
  }

  return (
    <React.Fragment>
      <Typography.Title level={1} className={'!text-2xl !mb-8'}>{intl.formatMessage({
        id: 'page.title.setting.change-password',
        defaultMessage: 'Change Password'
      })}</Typography.Title>
      <Form form={form} layout={'vertical'} onFinish={_onFinish}>
        <Row gutter={24}>
          <Col xs={24} xl={12}>
            <Form.Item
              name={'current_password'}
              label={intl.formatMessage({
                id: 'form.change-password.current-password.label',
                defaultMessage: 'Current Password'
              })}
              rules={[{
                required: true,
                message: intl.formatMessage({id: 'form.change-password.current-password.placeholder'})
              }]}
              hasFeedback
            >
              <Input.Password placeholder={'input your old password'} disabled={loading}/>
            </Form.Item>
            <Row gutter={24}>
              <Col xs={24} xl={12}>
                <Form.Item
                  name={'new_password'}
                  label={setLocale(true, 'form.change-password.new-password.label', 'New Password')}
                  rules={[{
                    required: true,
                    message: intl.formatMessage({
                      id: 'form.change-password.new-password.placeholder',
                      defaultMessage: "New password is Required!"
                    })
                  }]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder={intl.formatMessage({
                      id: 'form.change-password.new-password.placeholder',
                      defaultMessage: 'Input your new password'
                    })}
                    disabled={loading}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={12}>
                <Form.Item
                  name={'new_password_confirmation'}
                  label={intl.formatMessage({
                    id: 'form.change-password.confirm-password.label',
                    defaultMessage: 'Confirm Password'
                  })}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({
                        id: 'form.change-password.confirm-password.error.required',
                        defaultMessage: 'Confirm Password is Required!'
                      })
                    },
                    ({getFieldValue}) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          getFieldValue('new_password') === value
                        ) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(intl.formatMessage({
                            id: 'form.change-password.confirm-password.error.not-match',
                            defaultMessage: 'Password do not match!'
                          }))
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    disabled={loading}
                    placeholder={'input your confirm password'}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Button
              size="large"
              htmlType="submit"
              type="primary"
              loading={loading}
              icon={<Icons type={'SaveOutlined'}/>}
            >Submit</Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

Page.layout = (children: any) => {
  return (
    <SettingLayoutDefaultLayout
      type="dashboard"
      isFooter
      children={children}
      inner={menusConfig}
    />
  )
};

export default Page;
