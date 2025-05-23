import React from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Tabs, Form, Button, Flex} from "antd";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import {Icons} from "@/Components/general/Icons";
import GeneralForm from "@/Pages/Dashboard/App/ECommerce/partials/GeneralForm";
import VariantForm from "@/Pages/Dashboard/App/ECommerce/partials/VariantForm";
import ShippingForm from './partials/ShippingForm';

const Page = () => {
  const [form] = Form.useForm();
  const watchAll = Form.useWatch([], form);
  console.log({watchAll})
  const isAllFilled = React.useMemo(() => {
    if (!watchAll) return false;
    return Object.values(watchAll).every(value => value !== undefined && value !== null && String(value).trim() !== '');
  }, [watchAll]);

  function onFinish() {
    form.validateFields()
      .then((values) => {

      });
  }

  console.log({ watchAll });
  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'Add Product'}
        container
        className={'pb-20 pt-10'}
        extra={
          <Flex gap={10} align={'center'}>
            <Button type={'default'} icon={<Icons type={'ArrowLeftOutlined'}/>} onClick={onFinish}>Discard</Button>
            <Button type="primary" icon={<Icons type={'SaveOutlined'}/>} disabled={!isAllFilled}
                    onClick={onFinish}>Add</Button>
          </Flex>
        }
      >
        <Form
          layout={'vertical'}
          form={form}
          initialValues={{
            name: null,
            description: null,
            category: null,
            tag: [],
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
