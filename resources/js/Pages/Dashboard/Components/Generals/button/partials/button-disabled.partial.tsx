import React from 'react';
import DemoCard from "@/Components/util-component/DemoCard";
// @ts-ignore
import ButtonSize, {attributes} from "@/Pages/Dashboard/Components/Generals/button/markdown/ButtonDisabled.md";
import { Button, Flex } from 'antd';


const ButtonDisabledPartial: React.FC<any> = ()=> {

  return (
    <React.Fragment>
      <DemoCard source={<ButtonSize/>} attributes={attributes}>
        <Flex gap="small" align="flex-start" vertical>
          <Flex gap="small">
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>
              Primary(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button>Default</Button>
            <Button disabled>Default(disabled)</Button>
          </Flex>
          <Flex gap="small">
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>
              Dashed(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button type="text">Text</Button>
            <Button type="text" disabled>
              Text(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button type="link">Link</Button>
            <Button type="link" disabled>
              Link(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button type="primary" href="https://ant.design/index-cn">
              Href Primary
            </Button>
            <Button type="primary" href="https://ant.design/index-cn" disabled>
              Href Primary(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button danger>Danger Default</Button>
            <Button danger disabled>
              Danger Default(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button danger type="text">
              Danger Text
            </Button>
            <Button danger type="text" disabled>
              Danger Text(disabled)
            </Button>
          </Flex>
          <Flex gap="small">
            <Button type="link" danger>
              Danger Link
            </Button>
            <Button type="link" danger disabled>
              Danger Link(disabled)
            </Button>
          </Flex>
          <Flex gap="small" className="site-button-ghost-wrapper">
            <Button ghost>Ghost</Button>
            <Button ghost disabled>
              Ghost(disabled)
            </Button>
          </Flex>
        </Flex>
      </DemoCard>
    </React.Fragment>
  )
}

export default ButtonDisabledPartial;
