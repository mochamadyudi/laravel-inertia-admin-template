import React from 'react';
import {FormProps} from "antd/es/form/Form";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Form, Input} from "antd";

interface FormInterface extends FormProps{
  form: FormInstance;
  children?: React.ReactNode;
  inputClassName?: string;
  formClassName?: string;
}
const ForgotPasswordForm: React.FC<FormInterface> = ({form, ...props}) => {
  return (
    <React.Fragment>
      <Form
        {...props}
        form={form}
        layout={props?.layout ?? "vertical"}
        initialValues={props?.initialValues}
      >
        <Form.Item name="email" label="Email" rules={[{ required: true }, { type: "email" }]}>
          <Input placeholder="Input your email"/>
        </Form.Item>
        {props?.children}
      </Form>
    </React.Fragment>
  )
};

export default ForgotPasswordForm;
