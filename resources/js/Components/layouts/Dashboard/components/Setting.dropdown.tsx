import React, { useState } from 'react';
import {
  Button,
  ColorPicker,
  Divider,
  Drawer,
  Flex,
  Form,
  Switch,
  Tabs,
  Typography,
} from 'antd';
import { Icons } from '@/Components/general/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {onSaveTheme} from "@/Redux/actions/Theme";
import TheContainer from "@/Components/general/TheContainer";

const SettingDropdown: React.FC<any> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.Theme);
  const [form] = Form.useForm();

  const theme = Form.useWatch('theme', form);

  const [open, setOpen] = useState(false);

  function _onChange() {
    setOpen((prevState: any) => !prevState);
  }

  function _onSaveTheme() {
    form.validateFields().then(values => {
      if (typeof values?.theme === 'boolean') {
        Reflect.set(values, 'theme', values?.theme === true ? 'dark' : 'light');
      }
      if (
        typeof values?.token?.colorPrimary !== 'undefined' &&
        typeof values?.token?.colorPrimary?.toHexString !== 'undefined'
      ) {
        Reflect.set(
          values.token,
          'colorPrimary',
          values.token.colorPrimary.toHexString()
        );
      }
      //@ts-ignore
      dispatch(onSaveTheme(values));
    });
  }

  function ThemeComponent() {
    return (
      <div>
        <Form
          form={form}
          layout={'vertical'}
          initialValues={{
            ...state,
            theme: state?.theme === 'dark',
          }}
        >
          <Form.Item
            name="theme"
            label="Dark Mode"
            extra={'Theme theme'}
            rules={[{ type: 'boolean' }]}
          >
            <Switch
              defaultChecked={theme === 'dark'}
              size={'default'}
              checkedChildren={<Icons type={'MoonOutlined'} />}
              unCheckedChildren={<Icons type={'SunOutlined'} />}
            />
          </Form.Item>

          <Divider />
          <Typography.Title level={4}>Token</Typography.Title>
          <Form.Item
            name={['token', 'colorPrimary']}
            label="Color Primary"
            rules={[{ required: true }]}
          >
            <ColorPicker
              size={'large'}
              showText
              format={'hex'}
              defaultFormat={'hex'}
            />
          </Form.Item>
        </Form>
      </div>
    );
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
            <Flex justify={'space-between'}>
              <Typography.Title level={4}>Setting Theme</Typography.Title>
              <Flex gap={15}>
                <Button
                  icon={<Icons type={'ArrowLeftOutlined'} />}
                  size={'large'}
                  className={'!px-10'}
                  onClick={_onChange}
                >
                  Close
                </Button>
                <Button
                  size={'large'}
                  className={'!px-10'}
                  type={'primary'}
                  onClick={_onSaveTheme}
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </TheContainer>
        }
        maskClosable={false}
        destroyOnClose
        closable={false}
        height="90vh"
        open={open}
        onClose={_onChange}
        placement={'bottom'}
      >
        <TheContainer>
          <Tabs
            items={[
              {
                key: 'general',
                label: 'General',
                children: <p>General</p>,
              },
              {
                key: 'theme',
                label: 'Theme',
                children: ThemeComponent(),
              },
            ]}
          />
        </TheContainer>
      </Drawer>
    </React.Fragment>
  );
};

export default SettingDropdown;
