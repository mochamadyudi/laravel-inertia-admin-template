import React from 'react';
import {Button, Table, Typography} from "antd";
import {PreContainer} from "@/Components/util-component/code-style";
//@ts-ignore
import DefaultIconMD from "@/Pages/Dashboard/Components/Generals/icon/markdown/DefaultIcon.md";
//@ts-ignore
import IconStyleMD from "@/Pages/Dashboard/Components/Generals/icon/markdown/IconStyle.md";
//@ts-ignore
import SetTwoToneMD from "@/Pages/Dashboard/Components/Generals/icon/markdown/SetTwoTone.md";

//@ts-ignore
import CustomIconMD from "@/Pages/Dashboard/Components/Generals/icon/markdown/CustomIcon.md";

const ApiPartials: React.FC = ()=> {
  return (
    <div className={'space-y-6'}>
      <section id={'how-to-use'}>
        <Typography.Title level={3}>How To Use ?</Typography.Title>
        <Typography.Paragraph>Before using icons, you need to install the <Button type={'link'} href="https://github.com/ant-design/ant-design-icons" target={'_blank'}>@ant-design/icons</Button> package</Typography.Paragraph>
        <PreContainer>
          <DefaultIconMD/>
        </PreContainer>
        <Typography.Paragraph>All the icons will render to {'<svg>'}. You can still set style and className for size and color of icons.</Typography.Paragraph>
        <PreContainer>
          <IconStyleMD/>
        </PreContainer>
      </section>
      <section id="two-tone">
        <Typography.Title level={3}>Set TwoTone Color</Typography.Title>
        <Typography.Paragraph>When using the two-tone icons, you can use the static methods getTwoToneColor() and setTwoToneColor(colorString) to specify the primary color.</Typography.Paragraph>
        <PreContainer>
          <SetTwoToneMD/>
        </PreContainer>
      </section>
      <section id="two-tone">
        <Typography.Title level={3}>Custom Icon</Typography.Title>
        <Typography.Paragraph>When using the two-tone icons, you can use the static methods getTwoToneColor() and setTwoToneColor(colorString) to specify the primary color.</Typography.Paragraph>
        <PreContainer>
          <CustomIconMD/>
        </PreContainer>
      </section>
      <section id="api-property">
        <Typography.Title level={3}>Property</Typography.Title>
        <Table
          bordered
          columns={[
            {
              dataIndex: 'property',
              title: 'Property'
            },
            {
              dataIndex: 'description',
              title: 'Description'
            },
            {
              dataIndex: 'type',
              title: 'Type'
            },
            {
              dataIndex: 'readonly',
              title: 'ReadOnly'
            },
            {
              dataIndex: 'version',
              title: 'Version'
            }

          ]}
          pagination={false}
          dataSource={[
            {
              property: 'className',
              description: 'The computed class name of the svg element',
              type: 'string',
              readonly: '-',
              version:'-'
            },
            {
              property: 'fill',
              description: 'Define the color used to paint the svg element',
              type: 'string',
              readonly: 'currentColor',
              version:'-'
            },
            {
              property: 'height',
              description: 'The height of the svg element',
              type: 'string | number',
              readonly: '1em',
              version:'-'
            },
            {
              property: 'style',
              description: 'The computed style of the svg element',
              type: 'CSSProperties',
              readonly: '-',
              version:'-'
            },
            {
              property: 'width',
              description: 'The width of the svg element',
              type: 'string | number',
              readonly: '1em',
              version:'-'
            },
          ]}
        />
      </section>

    </div>
  )
}

export default ApiPartials;
