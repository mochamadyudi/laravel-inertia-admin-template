import React from 'react';
import {Button, ColorPicker, Form, Input, Select, Upload} from "antd";
import FormBuilder from "antd-form-builder";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {Icons} from "@/Components/general/Icons";

interface SiteFormInterface {
  form: FormInstance
}
const SiteFormAdditional: React.FC<SiteFormInterface> = ({ form }) => {
  const meta = {
    columns: 24,
    fields: [
      {
        key: 'siteName',
        label: 'Site Name',
        widget: Input,
        required: true,
        hasFeedback: true,
        widgetProps: { placeholder: 'Input your meta description', size: 'large' },
        labelCol: 24,
        colon: true,
        colSpan: 24,
      },
      {
        key: 'siteDescription',
        label: 'Deskripsi Situs',
        widget: Input.TextArea,
        required: true,
        hasFeedback: true,
        widgetProps: { placeholder: 'Input your meta description' },
        labelCol: 24,
        colon: true,
        colSpan: 24,
      },
      {
        key: 'siteTitle',
        label: "Site Title",
        widget: Input,
        message: 'Judul situs harus diisi',
        required: true,
        hasFeedback: true,
        widgetProps: { placeholder: 'Input your meta description' },
        labelCol: 24,
        colon: true,
        colSpan: 24,
      },
      {
        key: 'metaDescription',
        label: 'Meta Deskripsi',
        widget: Input.TextArea,
        required: true,
        hasFeedback: true,
        widgetProps: { placeholder: 'Input your meta description' },
        labelCol: 24,
        colon: true,
        colSpan: 24,
      },
    ],
  };

  return (
    <React.Fragment>
      <Form
        layout="vertical"
        form={form}
      >
        <FormBuilder meta={meta} form={form} />
        <Button
          htmlType="submit"
          icon={<Icons type={'SaveOutlined'}/>}
          type="primary"
          className="!w-full"
        >Submit</Button>
      </Form>
    </React.Fragment>
  )
};

export default SiteFormAdditional;
