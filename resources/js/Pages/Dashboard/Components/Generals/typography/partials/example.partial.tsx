import React from 'react';
import {Card, Space, Typography} from "antd";

const { Text, Link } = Typography;
const ExamplePartial: React.FC = () => {
  return (
    <React.Fragment>
      <Card bordered={false} title={'Example'}>
        <Space direction="vertical">
          <Text>Ant Design (default)</Text>
          <Text type="secondary">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Text italic>Ant Design (italic)</Text>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Space>
      </Card>
    </React.Fragment>
  )
}

export default ExamplePartial;
