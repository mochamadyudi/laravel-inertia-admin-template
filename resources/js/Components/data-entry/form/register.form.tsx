import React from 'react';
import {FormProps} from "antd/es/form/Form";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Col, Form, Input, Row} from "antd";

interface RegisterFormInterface extends FormProps{
  form: FormInstance;
  children?: React.ReactNode;
  inputClassName?: string;
  formClassName?: string;
}
const RegisterForm: React.FC<RegisterFormInterface> = ({ form, ...props}) => {
  return (
    <React.Fragment>
      <Form
        {...props}
        form={form}
        layout={props?.layout}
      >
        <Form.Item
          className={props?.formClassName ?? ""}
          name="fullname" label="Fullname" rules={[{ required: true }]} hasFeedback>
          <Input size="large" placeholder="Input your fullname" className={props?.inputClassName ?? ""}/>
        </Form.Item>
        <Form.Item
          className={props?.formClassName ?? ""}
          name="email" label="Email" rules={[{ required: true }, { type: 'email' }]} hasFeedback>
          <Input size="large" placeholder="Input your email" className={props?.inputClassName ?? ""}/>
        </Form.Item>
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <Form.Item
              className={props?.formClassName ?? ""}
              name="password" label="Password" rules={[{ required: true }]}
            >
              <Input.Password size="large" placeholder="Input your password" className={props?.inputClassName ?? ""}/>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              className={props?.formClassName ?? ""}
              name="confirmation_password" label="Confirm Password" rules={[{ required: true }]}
            >
              <Input.Password size="large" placeholder="Input your password" className={props?.inputClassName ?? ""}/>
            </Form.Item>
          </Col>
        </Row>
        {props?.children}
      </Form>
    </React.Fragment>
  )
};

export default RegisterForm;
