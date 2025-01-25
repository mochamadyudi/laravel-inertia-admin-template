import React from 'react';
import TheDashboard from "@/Components/layouts/Dashboard/TheDashboard";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import {Col, Row, Typography} from "antd";
import ExamplePartial from "@/Pages/Dashboard/Components/Generals/typography/partials/example.partial";
import EditablePartial from "@/Pages/Dashboard/Components/Generals/typography/partials/editable.partial";
import EllipsisPartial from "@/Pages/Dashboard/Components/Generals/typography/partials/ellipsis.partial";
import EllipsisControllerExpandPartial
  from "@/Pages/Dashboard/Components/Generals/typography/partials/ellipsis-controller-expand.partial";
import EllipsisSuffix from "@/Pages/Dashboard/Components/Generals/typography/partials/ellipsis-suffix.partial";
import FooterLayout from "@/Components/layouts/footer.layout";
import TheContainer from "@/Components/general/TheContainer";

const Page = () => {
  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'Typography'}
        addonAfter={<Typography.Paragraph>Basic text writing, including headings, body text, lists, and more.</Typography.Paragraph>}
        container
        className={'pb-10'}
        contentClassName={'mt-6'}
        type={'default'}
      >
        <Row gutter={[24,24]}>
          <Col sm={24}  lg={12}>
            <ExamplePartial/>
            <EllipsisPartial/>
            <EllipsisSuffix/>
          </Col>
          <Col sm={24}  lg={12}>
            <EditablePartial/>
            <EllipsisControllerExpandPartial/>
          </Col>
        </Row>
      </PageHeaderAlt>
      <FooterLayout>
        <TheContainer>
          <Typography.Title level={3}>API</Typography.Title>
        </TheContainer>
      </FooterLayout>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <TheDashboard children={children} isFooter={false}/>

export default Page;
