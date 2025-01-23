import React from 'react';
import TheDashboard from "@/Components/layouts/Dashboard/TheDashboard";
import {Col, Row, Card, Typography, Descriptions, message, Button, Tooltip} from "antd";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import {CopyToClipboard} from 'react-copy-to-clipboard';
// @ts-ignore
import SecOne, {attributes as AttrSecOne} from "./markdown/Basic.md";
// @ts-ignore
import WithIconButton, {attributes as AttrWithIconButton} from "./markdown/ButtonWithIcon.md";
// @ts-ignore
import ButtonDanger, {attributes as AttrButtonDanger} from "./markdown/ButtonDanger.md";
// @ts-ignore
import ButtonSize, {attributes as AttrButtonSize} from "./markdown/Sizes.md";

import DemoCard from "@/Components/util-component/DemoCard";
import {Icons} from "@/Components/general/Icons";
import ButtonSizePartial from "@/Pages/Dashboard/Components/Generals/button/partials/button-size.partial";
import ButtonVariantPartial from "@/Pages/Dashboard/Components/Generals/button/partials/button-variant.partial";

const Page = () => {
  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'Button'}
        addonAfter={
          <div>
            <Typography.Paragraph>To trigger an operation.</Typography.Paragraph>
            <Descriptions colon={false} className={'w-[320px]'}>
              <Descriptions.Item label="Import" span={4}>
                <CopyToClipboard text={"import react from 'react'"} onCopy={() => {
                  message.success("Successfully copied")
                }}>
                  <div
                    className="flex items-center gap-2 !text-base !font-bold bg-slate-100 dark:bg-slate-700 px-2 rounded-lg cursor-pointer">
                    <span className={'text-[#ba3976]'}>import</span>
                    <span className={'text-slate-700 dark:text-white'}>{'{ Button }'}</span>
                    <span className={'text-[#ba3976]'}>from</span>
                    <span className={'text-[#5bac2c] dark:text-[#86d658]'}>"antd"</span>
                  </div>
                </CopyToClipboard>
              </Descriptions.Item>
            </Descriptions>
          </div>
        }
        container
        contentClassName={'mt-6'}
        type={'default'}
      >
        <Row gutter={[24, 24]}>
          <Col
            xs={{
              span: 24,
              order: 1
            }}
            lg={{
              span: 12,
              order: 1
            }}
          >

            <DemoCard source={<SecOne/>} attributes={AttrSecOne}>
              <div className="flex gap-2 flex-wrap items-start">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                <Button type="text">Text</Button>
              </div>
            </DemoCard>
            <DemoCard source={<ButtonDanger/>} attributes={AttrButtonDanger}>
              <div className="flex gap-2 flex-wrap items-start">
                <Button type="primary" danger>Primary</Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>Dashed</Button>
                <Button type="link" danger>Link</Button>
                <Button type="text" danger>Text</Button>
              </div>
            </DemoCard>
            <ButtonSizePartial/>
          </Col>
          <Col
            xs={{
              span: 24,
              order: 1
            }}
            lg={{
              span: 12,
              order: 1
            }}
          >

            <DemoCard source={<WithIconButton/>} attributes={AttrWithIconButton}>
              <div className={'space-y-4'}>
                <div className="flex gap-4 flex-wrap items-start">
                  <Button type="primary" icon={<Icons type={'SearchOutlined'}/>} shape={'circle'}/>
                  <Button type="primary" shape={'circle'}>A</Button>
                  <Button type="primary" icon={<Icons type={'SearchOutlined'}/>}>
                    Search
                  </Button>
                  <Button type="primary" ghost icon={<Icons type={'SearchOutlined'}/>} shape={'circle'}/>
                  <Button type="primary" ghost icon={<Icons type={'SearchOutlined'}/>}>
                    Search
                  </Button>
                </div>
                <div className="flex gap-4 flex-wrap items-start">
                  <Tooltip title={"Search"}>
                    <Button type="default" icon={<Icons type={'SearchOutlined'}/>} shape={'circle'}/>
                  </Tooltip>
                  <Button icon={<Icons type={'SearchOutlined'}/>}>
                    Search
                  </Button>
                  <Tooltip title={"Search"}>
                    <Button type="dashed" icon={<Icons type={'SearchOutlined'}/>} shape={'circle'}/>
                  </Tooltip>

                  <Button type="dashed" icon={<Icons type={'SearchOutlined'}/>}>
                    Search
                  </Button>
                </div>
              </div>

            </DemoCard>

            <ButtonVariantPartial />
          </Col>
        </Row>
      </PageHeaderAlt>
    </React.Fragment>
  )
}

Page.layout = (children: any) => <TheDashboard isFooter={false} showMenuBar={false} children={children}/>;
export default Page;
