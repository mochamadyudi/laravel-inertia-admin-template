import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Tabs, Form, Button, Flex} from "antd";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import {Icons} from "@/Components/general/Icons";
import GeneralForm from "@/Pages/Dashboard/App/ECommerce/partials/GeneralForm";
import VariantForm from "@/Pages/Dashboard/App/ECommerce/partials/VariantForm";
import ShippingForm from './partials/ShippingForm';
import {Link, router} from "@inertiajs/react";

const Page = (props: any) => {
  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'Show Product'}
        container
        className={'pb-20 pt-10'}
        extra={
          <Flex gap={10} align={'center'}>
            <Button type={'default'} icon={<Icons type={'ArrowLeftOutlined'}/>} onClick={()=> window.history.back()}>Discard</Button>
            <Link href={route('dashboard.ecommerce.edit', { id: props?.collections?.data?.id })}>
              <Button type="primary" icon={<Icons type={'SaveOutlined'}/>}>Edit</Button>
            </Link>
          </Flex>
        }
      >
        <Form
          layout={'vertical'}
          form={form}
          initialValues={{
            ...props?.collections?.data
          }}
        >
          <Tabs className="relative -top-12 z-[10]">
            <Tabs.TabPane
              key="general"
              tabKey="general"
              tab={
                <span className="space-x-1">
                  <span className="text-red-500">*</span>
                  <span>General</span>
                </span>
              }>
              <GeneralForm
                form={form}
              />
            </Tabs.TabPane>

            <Tabs.TabPane
              key="variation"
              tabKey="variation"
              tab={"Variation"}>
              <VariantForm form={form}/>
            </Tabs.TabPane>

            <Tabs.TabPane key="shipping" tabKey="Shipping" tab={'Shipping'}>
              <ShippingForm form={form}/>
            </Tabs.TabPane>
          </Tabs>
        </Form>
      </PageHeaderAlt>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" hasContainer isFooter children={children}/>
  )
};

export default Page;
