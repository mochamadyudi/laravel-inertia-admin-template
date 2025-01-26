import React, {useState} from 'react';
import {Button, Tooltip, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import BrowserFrame from "@/Components/general/BrowserFrame";
//@ts-ignore
import MD from '../markdown/Badge.md';
import {PreContainer} from "@/Components/util-component/code-style";

const BadgeFloatButtonPartial: React.FC = ()=> {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <BrowserFrame
        title={'Badge'}
        description={
        <React.Fragment>
          <Typography>FloatButton with Badge.</Typography>
        </React.Fragment>
        }
        src={route('frame.float-button.badge')}
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

export default BadgeFloatButtonPartial;
