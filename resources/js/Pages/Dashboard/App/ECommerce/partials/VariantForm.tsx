import React, {useEffect, useState} from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  FormListFieldData,
  Input,
  InputNumber, message,
  Row,
} from "antd";
import {FormInstance} from "antd/es/form/hooks/useForm";
import UploadMedia from "@/Components/data-entry/UploadMedia";
import {Icons} from "@/Components/general/Icons";
import {UploadProps} from "antd/es/upload/interface";
import {Utils} from "@/Utils";

interface VariantFormProduct {
  form: FormInstance
}
const VariantForm: React.FC<VariantFormProduct> = function({ form }){
  return (
    <React.Fragment>
      <Card title="Variant" bordered>
        <Form.List name="variants" rules={[]}>
          {(fields, { add, remove }) => (
            <div
              className="space-y-4"
            >
              {fields.map((field) => (
                <div
                  key={field.name}
                  className="p-4 border border-dashed border-color-default rounded-xl relative"
                >
                  <VariantItem form={form} field={field}/>
                  <div className="absolute -top-2 -right-2">
                    <Button
                      type={'primary'}
                      danger
                      onClick={()=> remove(field.name)}
                      icon={<Icons type={'DeleteOutlined'} />}
                    />
                  </div>
                </div>
              ))}

              <Button type="dashed" onClick={() => add({
                image: null,
                name: null,
                price: null,
                sku: null,
              })} block>
                + Add Item
              </Button>
            </div>
          )}
        </Form.List>
      </Card>
    </React.Fragment>
  )
}

const VariantItem: React.FC<{ form: FormInstance, field:FormListFieldData}> = ({ field, form }) => {
  const watchImage = Form.useWatch([`variants`,field.name, 'image'], form);
  const [loading, setLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string | null>(null);
  const [image, setImage] = useState<string|null>(null);

  useEffect(() => {
    if(watchImage && typeof(watchImage) == 'string'){
      setImage(watchImage)
    }
  }, [watchImage]);

  const handleUploadChange: UploadProps['onChange'] = (info) => {
    console.log({ info })
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
  const handleCustomRequest: UploadProps['customRequest'] = async ({file, onSuccess, onProgress}) => {
    //@ts-ignore
    setFilename(file?.name ?? null);

    const currentVariants = form.getFieldValue('variants') || [];
    const updateVariants = [...currentVariants];
    updateVariants[field.key] = { ...updateVariants[field.key], image: file };
    form.setFieldsValue({ variants: updateVariants });
    message.loading({content: "Loading...", key: "update-thumbnail", duration: 2})

    // action if using api

    message.success({content: "Successfully uploaded", key: "update-thumbnail", duration: 2})
    //@ts-ignore
    onSuccess('ok');
  }
  return (
    <Row gutter={[24, 24]}>
      <Col
        xs={{
          span: 24,
          order: 1
        }}
        lg={{
          span: 16,
          order: 2
        }}
      >
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <Form.Item {...field}  label="Name" name={[field.name, 'name']} rules={[ {required: true } ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item {...field} name={[field.name, "price"]} label="Price" rules={[{required: true}]} >
              <InputNumber
                prefix={'$'}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item {...field} label="Stock Keeping Unit" name={[field.name, 'sku']} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Col>
      <Col
        xs={{
          span: 24,
          order: 2
        }}
        lg={{
          span: 8,
          order: 1
        }}
      >
        <Form.Item
          {...field}
          name={[field.name, 'image']}>
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
      </Col>
    </Row>
  )
}
export default VariantForm;
