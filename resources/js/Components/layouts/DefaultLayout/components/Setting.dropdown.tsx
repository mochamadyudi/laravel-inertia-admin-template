import React, { useState } from 'react';
import {
  Button, Col,
  ColorPicker,
  Divider,
  Drawer,
  Flex,
  Form, InputNumber, message,
  Row,
  Segmented,
  Switch,
  Tabs,
  Typography,
} from 'antd';
import { Icons } from '@/Components/general/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {changeThemeToken, onChangeDirection, onSaveTheme} from "@/Redux/actions/Theme";
import TheContainer from "@/Components/general/TheContainer";
import {DIR_LTR, DIR_RTL} from "@/Configs/app.config";

const SettingDropdown: React.FC<any> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.Theme);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  function _onChange() {
    setOpen((prevState: any) => !prevState);
  }
  const [initialValues] = useState(()=> {
    let _: any = {
      ...state.antd,
    };
    if(_?.token?.colorPrimary){

    }
    return _
  })

  function _onFinish(){
    form.validateFields()
      .then((values: any)=> {
        message.loading({
          key: "theme",
          content: "Loading...",
          duration: 2,
        });
        Object.entries(values?.token).map(([key, value]: [string, any])=> {
          if([
            'colorPrimary',
            'colorInfo',
            'colorSuccess',
            'colorWarning',
            'colorError',].includes(key)){

            if(typeof(value) !== 'string'){
              Reflect.set(values.token, key, value.toHexString())
            }
          }
        })
        // @ts-ignore
        dispatch(changeThemeToken(values));

      })
  }

  return (
    <React.Fragment>
      <Button
        onClick={_onChange}
        type={'text'}
        shape={'circle'}
        className={'flex items-center justify-center !m-0 !p-0'}
        icon={<Icons type={'SettingOutlined'} className={'!text-lg'}/>}
        size={'large'}
      />
      <Drawer
        title={
          <TheContainer>
            <Flex gap={10} align={'center'}>
              <Button
                type={'text'}
                shape={'circle'}
                size={'small'}
                icon={<Icons type={state?.direction ==='ltr' ? 'ArrowLeftOutlined': 'ArrowRightOutlined'} />}
                onClick={_onChange}
              />
              <Typography.Title level={4} className={'!m-0'}>Setting Theme</Typography.Title>

            </Flex>
          </TheContainer>
        }
        maskClosable={false}
        destroyOnClose
        closable={false}
        height="90vh"
        open={open}
        onClose={_onChange}
        placement={state?.direction ==='ltr' ? 'right': 'left'}
      >
        <TheContainer>
          <div className="space-y-10">
            <div>
              <Typography.Paragraph>Direction</Typography.Paragraph>
              <Segmented
                options={[DIR_LTR, DIR_RTL]}
                className={'!uppercase'}
                value={state?.direction ?? DIR_LTR}
                onChange={(val: string | 'ltr' | 'rtl') => {
                  // @ts-ignore
                  dispatch(onChangeDirection(val));
                }}
              />
            </div>
            <div>
              <Typography.Title level={3}>Token</Typography.Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={_onFinish}
                initialValues={{
                  ...initialValues,
                }}
              >
                <Row gutter={24}>
                  <Col xs={24} lg={12}>
                    <Form.Item name={['token', 'colorPrimary']} label={"Color Primary"}>
                      <ColorPicker showText size={'large'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item name={['token', 'colorInfo']} label={"Color Info"}>
                      <ColorPicker showText size={'large'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item name={['token', 'colorSuccess']} label={"Color Success"}>
                      <ColorPicker showText size={'large'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item name={['token', 'colorWarning']} label={"Color Warning"}>
                      <ColorPicker showText size={'large'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item name={['token', 'colorError']} label={"Color Error"}>
                      <ColorPicker showText size={'large'}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Button htmlType="submit" type="primary">Submit</Button>
              </Form>
            </div>
          </div>
        </TheContainer>
      </Drawer>
    </React.Fragment>
  );
};

export default SettingDropdown;
