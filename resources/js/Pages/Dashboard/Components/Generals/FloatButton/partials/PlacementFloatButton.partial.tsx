import React, {useState} from 'react';
import {Button, Tooltip, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import BrowserFrame from "@/Components/general/BrowserFrame";

//@ts-ignore
import MD from '../markdown/Placement.md';
import {PreContainer} from "@/Components/util-component/code-style";

const PlacementFloatButtonPartial: React.FC = ()=> {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <BrowserFrame
        title={'Placement'}
        description={
        <React.Fragment>
          <Typography>
            Customize animation placement, providing four preset placement: <Typography.Text keyboard>top</Typography.Text>, <Typography.Text keyboard>right</Typography.Text>, <Typography.Text keyboard>bottom</Typography.Text>, <Typography.Text keyboard>left</Typography.Text>, the top position by default.
          </Typography>
        </React.Fragment>
        }
        src={route('frame.float-button.placement')}
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

export default PlacementFloatButtonPartial;
