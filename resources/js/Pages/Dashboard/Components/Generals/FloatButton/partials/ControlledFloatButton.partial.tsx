import React, {useState} from 'react';
import {Button, Tooltip, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import BrowserFrame from "@/Components/general/BrowserFrame";

//@ts-ignore
import MD from '../markdown/Controlled.md';
import {PreContainer} from "@/Components/util-component/code-style";

const ControlledFloatButtonPartial: React.FC = ()=> {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <BrowserFrame
        title={'Controlled Mode'}
        description={
        <React.Fragment>
          <Typography>
            Set the component to controlled mode through open, which need to be used together with <Typography.Text keyboard>{'trigger'}</Typography.Text>.</Typography>
        </React.Fragment>
        }
        src={route('frame.float-button.controlled')}
        className={'h-[300px]'}
        extra={
          <React.Fragment>
            <Button type={'text'} size={'small'} shape={'circle'} icon={<Icons type={'CopyOutlined'}/>}/>
            <Tooltip title={open ? 'Close Code': "Open Code"}>
              <Button
                onClick={()=> setOpen(!open)}
                type={'text'}
                size={'small'}
                shape={'circle'}
                icon={<Icons type={open ? 'UpOutlined' : 'DownOutlined'}/>}
              />
            </Tooltip>
          </React.Fragment>
        }
        footer={!open ? null :
          <PreContainer>
            <MD/>
          </PreContainer>
        }
      />
    </React.Fragment>
  )
}

export default ControlledFloatButtonPartial;
