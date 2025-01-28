import React, { useState } from 'react';
import {
  Button,
  ColorPicker,
  Divider,
  Drawer,
  Flex,
  Form,
  Segmented,
  Switch,
  Tabs,
  Typography,
} from 'antd';
import { Icons } from '@/Components/general/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {onChangeDirection, onSaveTheme} from "@/Redux/actions/Theme";
import TheContainer from "@/Components/general/TheContainer";
import {DIR_LTR, DIR_RTL} from "@/Configs/app.config";

const SettingDropdown: React.FC<any> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.Theme);
  const [open, setOpen] = useState(false);

  function _onChange() {
    setOpen((prevState: any) => !prevState);
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
                {/*<Button*/}
                {/*  size={'large'}*/}
                {/*  className={'!px-10'}*/}
                {/*  type={'primary'}*/}
                {/*  onClick={_onSaveTheme}*/}
                {/*>*/}
                {/*  Save*/}
                {/*</Button>*/}
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
          <React.Fragment>
            <Typography.Paragraph>Direction</Typography.Paragraph>
            <Segmented
              options={[DIR_LTR, DIR_RTL]}
              className={'!uppercase'}
              value={state?.direction ?? DIR_LTR}
              onChange={(val: string| 'ltr' | 'rtl')=> {
                // @ts-ignore
                dispatch(onChangeDirection(val));
              }}
            />
          </React.Fragment>
        </TheContainer>
      </Drawer>
    </React.Fragment>
  );
};

export default SettingDropdown;
