import React from 'react';
import MailLayout from "@/Pages/Dashboard/App/Mail/partials/mail.layout";
import {Form, Input, Row, Col, Button, Flex} from "antd";
import QuilEditor from "@/Components/data-entry/Editor/quil.editor";

const Page = () => {
  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <Form
        form={form}
        layout="vertical"
        className=" h-full flex flex-col"
      >
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <Form.Item name="to" rules={[{required: true}]}>
              <Input placeholder="To:"/>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item name="cc">
              <Input placeholder="CC"/>
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item name="subject" rules={[{required: true}]}>
              <Input placeholder="Input your subject"/>
            </Form.Item>
          </Col>
        </Row>
        <div className="flex-1">
          <QuilEditor
            field={{
              name: "content",
            }}
            onChange={function (val: string) {
              form.setFieldsValue({
                content: val
              });
            }}
          />
        </div>
        <Flex className="mt-6" justify="end" gap={10}>
          <Button type="link" htmlType="submit">Save to Draft</Button>
          <Button htmlType="submit">Discard</Button>
          <Button type="primary" ghost htmlType="submit">Submit</Button>
        </Flex>
      </Form>
    </React.Fragment>
  )
};

Page.layout = (children: React.ReactNode) => {
  return (
    <MailLayout
      menu={{
        activeKey: route('dashboard.app.mail.compose'),
        defaultSelectedKeys: [route('dashboard.app.mail.compose')],
      }}
      type="dashboard"
      children={children}

    />
  )
};

export default Page;
