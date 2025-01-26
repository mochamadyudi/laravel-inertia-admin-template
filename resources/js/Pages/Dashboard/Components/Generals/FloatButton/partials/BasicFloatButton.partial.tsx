import React, {useState} from 'react';
import {Button, Drawer, Tooltip, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import BrowserFrame from "@/Components/general/BrowserFrame";

//@ts-ignore
import MD from '../markdown/Basic.md';
import {PreContainer} from "@/Components/util-component/code-style";

const BasicFloatButtonPartial: React.FC = ()=> {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <BrowserFrame
        title={'Basic'}
        description={<Typography>The most basic usage.</Typography>}
        src={route('frame.float-button.index')}
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

export default BasicFloatButtonPartial;
