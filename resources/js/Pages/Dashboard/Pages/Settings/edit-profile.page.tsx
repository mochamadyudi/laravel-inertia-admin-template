import React from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Typography, Form, Row, Col, Input, Select} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";

const Page = () => {
  const [form] = Form.useForm();
  return (
    <React.Fragment>
      <Typography.Title level={1}>Edit Profile</Typography.Title>
      <Form
        key="form-edit-profile"
        layout="vertical"
        form={form}
      >
        <Row gutter={[24,24]}>
          <Col xs={24} lg={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true, }]} hasFeedback>
              <Input placeholder="Input your name"/>
            </Form.Item>
            <Form.Item name="aa" label="Name" rules={[{ required: true, }]} hasFeedback>
              <Select options={[{
                label: "haha",
                value: 1
              }]} placeholder="Input your name" allowClear/>
            </Form.Item>
            <Form.Item name="test" label="Name" rules={[{ required: true, }]} hasFeedback>
              <Input.TextArea placeholder="Input your name"/>
            </Form.Item>
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
      hasContainer
      inner={menusConfig}
    />
  )
};

export default Page;
