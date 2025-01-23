import React, {useState} from 'react';
import DemoCard from "@/Components/util-component/DemoCard";
// @ts-ignore
import ButtonSize, {attributes} from "@/Pages/Dashboard/Components/Generals/button/markdown/IconPosition.md";
import { SearchOutlined } from '@ant-design/icons';
import {Button, Divider, Flex, Radio, Space, Tooltip, Typography} from 'antd';

const ButtonIconPosition: React.FC<any> = ()=> {
  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <React.Fragment>
      <DemoCard source={<ButtonSize/>} attributes={attributes}>
        <Space>
          <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
            <Radio.Button value="start">start</Radio.Button>
            <Radio.Button value="end">end</Radio.Button>
          </Radio.Group>
        </Space>
        <Divider orientation="left" plain className={'!bg-transparent'}>
          <Typography.Paragraph>Preview</Typography.Paragraph>
        </Divider>
        <Flex gap="small" vertical>
          <Flex wrap gap="small">
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />} iconPosition={position}>
              Search
            </Button>
          </Flex>
          <Flex wrap gap="small">
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />} type="text" iconPosition={position}>
              Search
            </Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} iconPosition={position}>
              Search
            </Button>
            <Button
              icon={<SearchOutlined />}
              href="https://www.google.com"
              target="_blank"
              iconPosition={position}
            />
            <Button type="primary" loading iconPosition={position}>
              Loading
            </Button>
          </Flex>
        </Flex>
      </DemoCard>


    </React.Fragment>
  )
}

export default ButtonIconPosition;
