import React from 'react';
import {FormProps} from "antd/es/form/Form";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Form, Input} from "antd";

interface LoginFormInterface extends FormProps{
  form: FormInstance;
  children?: React.ReactNode;
  inputClassName?: string;
  formClassName?: string;
}
const LoginForm: React.FC<LoginFormInterface> = ({ form, ...props }) => {
  return (
    <React.Fragment>
      <Form
        {...props}
        form={form}
        layout={props?.layout}
      >
        <Form.Item
          className={props?.formClassName ?? ""}
          name="email" label="Email" rules={[{ required: true }, { type: 'email' }]} hasFeedback>
          <Input size="large" placeholder="Input your email" className={props?.inputClassName ?? ""}/>
        </Form.Item>
        <Form.Item
          className={props?.formClassName ?? ""}
          name="password" label="Password" rules={[{ required: true }]}
        >
          <Input.Password size="large" placeholder="Input your password" className={props?.inputClassName ?? ""}/>
        </Form.Item>
        {props?.children}
      </Form>
    </React.Fragment>
  )
};

export default LoginForm;
