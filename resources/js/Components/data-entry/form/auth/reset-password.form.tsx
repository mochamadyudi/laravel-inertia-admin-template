import React from 'react';
import {FormProps} from "antd/es/form/Form";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Form, Input} from "antd";
import {useIntl} from "react-intl";

interface FormInterface extends FormProps{
  form: FormInstance;
  children?: React.ReactNode;
  inputClassName?: string;
  formClassName?: string;
}
const ResetPasswordForm: React.FC<FormInterface> = ({form, ...props}) => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <Form
        form={form}
        layout={props?.layout ?? "vertical"}
        initialValues={props?.initialValues}
      >
        <Form.Item name="email" label="Email" rules={[{ required: true }, { type: "email" }]} hidden>
          <Input placeholder="Input your email"/>
        </Form.Item>
        <Form.Item name="token" label="Token" hidden>
          <Input placeholder="Input your token"/>
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item
          name={'password_confirmation'}
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
                  getFieldValue('password') === value
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
            placeholder={'input your confirm password'}
          />
        </Form.Item>

        {props?.children}
      </Form>
    </React.Fragment>
  )
};

export default ResetPasswordForm;
