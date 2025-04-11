import React, {useState} from 'react';
import {Card, Form, Row, Col, Input, InputNumber, Select} from "antd";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {first} from "lodash";

interface ShippingFormProduct {
  form: FormInstance
}

const dataUOMWidth = [
  {
    id: 1,
    label: "CM",
    value: "cm",

  },
  {
    id: 2,
    label: "M",
    value: "m",

  },
  {
    id: 3,
    label: "MM",
    value: "mm",

  },
  {
    id: 4,
    label: "KM",
    value: "km",

  },
];
const dataUOMWeight = [
  {
    id: 1,
    label: "KG",
    value: "kg",
  },
  {
    id: 2,
    label: "G",
    value: "g",
  },
  {
    id: 3,
    label: "MG",
    value: "mg",
  },
];
const dataUOMHeight = [
  {
    id: 1,
    label: "CM",
    value: "cm",
  },
  {
    id: 2,
    label: "MM",
    value: "mm",
  },
  {
    id: 3,
    label: "M",
    value: "m",
  },
];
const ShippingForm: React.FC<ShippingFormProduct> = function ({ form }) {
  return (
    <React.Fragment>
      <Card title="Shipping" bordered={false}>
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <Form.Item name={['shipping', 'width']} label="Width">
              <InputNumber
                className="w-full"
                controls={false}
                placeholder="Enter width..."
                addonAfter={
                  <Select
                    showSearch
                    allowClear
                    key={'select-uom-width'}
                    value={
                      dataUOMWidth.find(
                        item => item.value === form.getFieldValue(['shipping', 'uom', 'width'])
                      )
                    }
                    defaultValue={first(dataUOMWidth)}
                    className="min-w-[100px]"
                    options={dataUOMWidth}
                    onChange={function(val, option: any){
                      console.log({ val, option })
                      form.setFieldsValue({
                        shipping: {
                          uom: {
                            width: option?.id as number
                          }
                        }
                      })
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item name={['shipping', 'height']} label="Height">
              <InputNumber
                className="w-full"
                controls={false}
                placeholder="Enter height..."
                addonAfter={
                  <Select
                    showSearch
                    allowClear
                    key={'select-uom-height'}
                    value={
                      dataUOMHeight.find(
                        item => item.value === form.getFieldValue(['shipping', 'uom', 'height'])
                      )
                    }
                    defaultValue={first(dataUOMHeight)}
                    className="min-w-[100px]"
                    options={dataUOMHeight}
                    onChange={function(val, option: any){
                      form.setFieldsValue({
                        shipping: {
                          uom: {
                            height: option?.id as number
                          }
                        }
                      })
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item name={['shipping', 'weight']} label="Weight">
              <InputNumber
                className="w-full"
                controls={false}
                placeholder="Enter weight..."
                addonAfter={
                  <Select
                    showSearch
                    allowClear
                    key={'select-uom-weight'}
                    value={
                      dataUOMWeight.find(
                        item => item.value === form.getFieldValue(['shipping', 'uom', 'weight'])
                      )
                    }
                    defaultValue={first(dataUOMWeight)}
                    className="min-w-[100px]"
                    options={dataUOMWeight}
                    onChange={function(val, option: any){
                      console.log({ val, option })
                      form.setFieldsValue({
                        shipping: {
                          uom: {
                            weight: option?.id as number
                          }
                        }
                      })
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item name={['shipping', 'fee']} label="Shipping Fees">
              <InputNumber
                prefix={'$'}
                className="w-full"
                controls={false}
                placeholder="Enter weight..."
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={["shipping", 'uom','width']} hidden>
          <InputNumber/>
        </Form.Item>
        <Form.Item name={["shipping", 'uom','height']} hidden>
          <InputNumber/>
        </Form.Item>
        <Form.Item name={["shipping", 'uom','weight']} hidden>
          <InputNumber/>
        </Form.Item>
      </Card>
    </React.Fragment>
  )
}

export default ShippingForm;
