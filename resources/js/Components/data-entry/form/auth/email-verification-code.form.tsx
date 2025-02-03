import React from 'react';
import {FormProps} from "antd/es/form/Form";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Form, Input} from "antd";
import {Icons} from "@/Components/general/Icons";

interface FormInterface extends FormProps{
  form: FormInstance;
  children?: React.ReactNode;
  inputClassName?: string;
  formClassName?: string;
}
const EmailVerificationCodeForm: React.FC<FormInterface> = ({form, ...props}) => {
  return (
    <React.Fragment>
      <Form
        form={form}
        layout={props?.layout ?? "vertical"}
        initialValues={props?.initialValues}
      >
        <Form.Item name="code" rules={[{ required: true }]}>
          <Input prefix={<Icons type={'CodeOutlined'} />} placeholder="Input your code"/>
        </Form.Item>
        {props?.children}
      </Form>
    </React.Fragment>
  )
};

export default EmailVerificationCodeForm;
