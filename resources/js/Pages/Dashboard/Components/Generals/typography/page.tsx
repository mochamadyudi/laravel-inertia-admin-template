import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
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
import ApiPartial from "@/Pages/Dashboard/Components/Generals/typography/partials/Api.partial";

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
        <ExamplePartial/>
        <Row gutter={[24,24]}>
          <Col sm={24}  lg={12}>

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
        <ApiPartial/>
      </FooterLayout>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <TheLayout children={children} isFooter={false}/>

export default Page;
