import React, {useEffect, useState} from 'react';
import {Card, Col, Form, Input, InputNumber, message, Row, Select} from "antd";
import {FormInstance} from "antd/es/form/hooks/useForm";
import UploadMedia from "@/Components/data-entry/UploadMedia";
import {Utils} from "@/Utils";
import {UploadProps} from "antd/es/upload/interface";

interface GeneralFormProduct {
  form: FormInstance
}

const GeneralForm: React.FC<GeneralFormProduct> = function ({ form }) {
  const watchImage = Form.useWatch(['thumbnail'], form);
  const [loading, setLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string | null>(null);
  const [image, setImage] = useState<string|null>(()=> {
    return watchImage ?? null ;
  });

  useEffect(() => {
    if(watchImage && typeof(watchImage) == 'string'){
      setImage(watchImage)
    }
  }, [watchImage]);

  const handleUploadChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      Utils.getBase64(info.file.originFileObj, (imageUrl: string) => {
        setImage(imageUrl);
        setLoading(false);
      });
    }
  };
  const handleCustomRequest: UploadProps['customRequest'] = async ({file, onSuccess}) => {
    //@ts-ignore
    setFilename(file?.name ?? null);

    form.setFieldsValue({
      thumbnail: file
    });

    message.loading({content: "Loading...", key: "update-thumbnail", duration: 10})

    // action if using api

    message.success({content: "Successfully uploaded", key: "update-thumbnail", duration: 10})
    //@ts-ignore
    onSuccess('ok');
  }
  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col
          xs={{
            order: 1,
            span: 24
          }}
          lg={{
            span: 16,
            order: 1,
          }}
        >
          <Card title="Basic Info" bordered={false}>
            <Form.Item name="name" label="Product Name" rules={[{required: true}]}>
              <Input placeholder="Input your product name"/>
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{required: true}]}>
              <Input.TextArea
                allowClear
                showCount={true}
                autoSize={{minRows: 4, maxRows: 6}}
              />
            </Form.Item>
          </Card>
          <Card title="Pricing" bordered={false}>
            <Row gutter={24}>
              <Col xs={24} lg={12}>
                <Form.Item name="price" label="Price" rules={[{required: true}]}>
                  <InputNumber
                    prefix={'$'}
                    controls={false}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item name="compare_price" label="Compare Price" rules={[{required: true}]}>
                  <InputNumber
                    prefix={'$'}
                    controls={false}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item name="price_per_item" label="Cost per item" rules={[{required: true}]}>
                  <InputNumber
                    prefix={'$'}
                    controls={false}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item name="tax_rate" label="Tax Rate" rules={[{required: true}]}>
                  <InputNumber
                    prefix={'%'}
                    controls={false}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          xs={{
            order: 2,
            span: 24
          }}
          lg={{
            span: 8,
            order: 2,
          }}
        >
          <Card bordered={false}>
            <Form.Item name="thumbnail" label="Thumbnail" rules={[ { required: true }]}>
              <UploadMedia
                loading={loading}
                uploadedImage={image ?? ''}
                filename={filename}
                options={{
                  name: 'file',
                  multiple: false,
                  showUploadList: false,
                  onChange: handleUploadChange,
                  customRequest: handleCustomRequest,
                }}
              />
            </Form.Item>
          </Card>
          <Card title="Taxonomy" bordered={false}>
            <Form.Item name="category" label="Category" rules={[{required: true}]}>
              <Select
                allowClear
                placeholder="Lorem ipsum dolor sit amet"
                options={[
                  {
                    label: "Cloths",
                    value: "cloths"
                  }
                ]}
              />
            </Form.Item>
            <Form.Item name="tag" label="Tag" rules={[{required: true}]}>
              <Select
                showSearch
                mode={'multiple'}
                allowClear
                variant={'outlined'}
                placeholder="Lorem ipsum dolor sit amet"
                options={[
                  {
                    label: "Cloths",
                    value: "cloths"
                  },
                  {
                    label: "Outdoor",
                    value: "outdoor"
                  },
                  {
                    label: "Indoor",
                    value: "indoor"
                  },
                ]}
              />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default GeneralForm;
