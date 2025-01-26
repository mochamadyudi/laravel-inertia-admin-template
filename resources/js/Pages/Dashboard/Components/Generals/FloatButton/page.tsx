import React from 'react';
import TheDashboard from "@/Components/layouts/Dashboard/TheDashboard";
import {Col, Row, Typography} from "antd";
import BasicFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/BasicFloatButton.partial";
import TypeFloatButtonPartial from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/TypeFloatButton.partial";
import ShapeFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/ShapeFloatButton.partial";
import GroupFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/GroupFloatButton.partial";
import PlacementFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/PlacementFloatButton.partial";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import BadgeFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/BadgeFloatButton.partial";
import ControlledFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/ControlledFloatButton.partial";
import BackTopFloatButtonPartial
  from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/BackTopFloatButton.partial";
import FooterLayout from "@/Components/layouts/footer.layout";
import TheContainer from "@/Components/general/TheContainer";
import TableApi from "@/Pages/Dashboard/Components/Generals/FloatButton/partials/table.api";

const Page = () => {
  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'FloatButton'}
        addonAfter={<Typography.Paragraph>A button that floats at the top of the page.</Typography.Paragraph>}
        container
        className={'pb-10'}
        contentClassName={'my-6'}
        type={'default'}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} xl={12}>
            <div className="space-y-6">
              <BasicFloatButtonPartial/>
              <ShapeFloatButtonPartial/>
              <PlacementFloatButtonPartial/>
              <BackTopFloatButtonPartial/>
            </div>

          </Col>
          <Col xs={24} xl={12}>
            <div className="space-y-6">
              <TypeFloatButtonPartial/>
              <GroupFloatButtonPartial/>
              <BadgeFloatButtonPartial/>
              <ControlledFloatButtonPartial/>
            </div>
          </Col>
        </Row>
      </PageHeaderAlt>
      <FooterLayout>
        <TheContainer>
          <Typography.Title level={2}>API</Typography.Title>
          <div className="space-y-6">
            <TableApi
              title={'common API'}
              dataSource={[
                {
                  property: 'icon',
                  description: 'Set the icon component of button',
                  type: 'ReactNode',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'description',
                  description: 'Text and other',
                  type: 'ReactNode',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'tooltip',
                  description: 'The text shown in the tooltip',
                  type: 'ReactNode | () => ReactNode',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'type',
                  description: 'Setting button type',
                  type: 'default | primary',
                  default: 'default',
                  version: '-'
                },
                {
                  property: 'shape',
                  description: 'Setting button shape',
                  type: 'circle | square',
                  default: 'circle',
                  version: '-'
                },
                {
                  property: 'onClick',
                  description: 'Set the handler to handle click event',
                  type: '(event) => void',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'onClick',
                  description: 'Set the handler to handle click event',
                  type: '(event) => void',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'href',
                  description: 'The target of hyperlink',
                  type: 'string',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'target',
                  description: 'Specifies where to display the linked URL',
                  type: 'string',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'htmlType',
                  description: 'Set the original html type of button.',
                  type: 'submit | reset | button',
                  default: 'button',
                  version: '5.21.0'
                },
                {
                  property: 'badge',
                  description: 'Attach Badge to FloatButton. status and other props related are not supported.',
                  type: <a href={'/#props'} target={'_blank'}>BadgeProps</a>,
                  default: '-',
                  version: '5.4.0'
                },
              ]}
            />
            <TableApi
              title={'FloatButton.Group'}
              dataSource={[
                {
                  property: 'shape',
                  description: 'Setting button shape of children',
                  type: 'circle | square',
                  default: 'circle',
                  version: '-'
                },
                {
                  property: 'trigger',
                  description: 'Which action can trigger menu open/close',
                  type: 'click | hover',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'closeIcon',
                  description: 'Customize close button icon',
                  type: 'React.ReactNode',
                  default: '<CloseOutlined />',
                  version: '-'
                },
                {
                  property: 'placement',
                  description: 'Customize menu animation placement',
                  type: 'top | left | right | bottom',
                  default: 'top',
                  version: '5.21.0'
                },
                {
                  property: 'onOpenChange',
                  description: 'Callback executed when active menu is changed, use it with trigger',
                  type: '(open: boolean) => void',
                  default: '-',
                  version: '-'
                },
                {
                  property: 'onClick',
                  description: 'Set the handler to handle click event (only work in Menu mode)',
                  type: '(event) => void',
                  default: '-',
                  version: '5.3.0'
                },
              ]}
            />
            <TableApi
              title={'FloatButton.BackTop'}
              dataSource={[
                {
                  property: 'duration',
                  description: 'Time to return to top（ms)',
                  type: 'number',
                  default: '450',
                  version: '-'
                },
                {
                  property: 'target',
                  description: 'Specifies the scrollable area dom node',
                  type: '() => HTMLElement',
                  default: '() => window',
                  version: '-'
                },
                {
                  property: 'visibilityHeight',
                  description: 'The BackTop button will not show until the scroll height reaches this value',
                  type: 'number',
                  default: '400',
                  version: '-'
                },
                {
                  property: 'onClick',
                  description: 'A callback function, which can be executed when you click the button',
                  type: '() => void',
                  default: '400',
                  version: '-'
                },
              ]}
            />
          </div>
        </TheContainer>
      </FooterLayout>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <TheDashboard isFooter={false} children={children} showMenuBar={false}/>

export default Page;
