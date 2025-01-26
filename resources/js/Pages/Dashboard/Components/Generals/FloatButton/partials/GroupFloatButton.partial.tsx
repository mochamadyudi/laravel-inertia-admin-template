import React, {useState} from 'react';
import {Button, Tooltip, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import BrowserFrame from "@/Components/general/BrowserFrame";

//@ts-ignore
import MD from '../markdown/Group.md';
import {PreContainer} from "@/Components/util-component/code-style";

const GroupFloatButtonPartial: React.FC = ()=> {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <BrowserFrame
        title={'Group'}
        description={
        <React.Fragment>
          <Typography>
            When multiple buttons are used together,  <Typography.Text keyboard>{'<FloatButton.Group />'}</Typography.Text> is recommended. By setting the <Typography.Text keyboard>shape</Typography.Text> property of FloatButton.Group, you can change the <Typography.Text keyboard>shape</Typography.Text> of group. The <Typography.Text keyboard>shape</Typography.Text> of the FloatButton.Group will override the <Typography.Text keyboard>shape</Typography.Text> of FloatButtons inside.
          </Typography>
        </React.Fragment>
        }
        src={route('frame.float-button.group')}
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

export default GroupFloatButtonPartial;
