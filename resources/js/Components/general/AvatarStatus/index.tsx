import React from 'react';
import { Avatar } from 'antd';
import {AvatarStatusAttr} from "@/Components/general/AvatarStatus/type";

const AvatarStatus:React.FC<AvatarStatusAttr> = (props) => {
  return (
    <div className={'avatar-status flex items-center gap-2'}>
      <Avatar  {...props.avatar} className={`ant-avatar-${props?.avatar?.type}`} />
      <div className={'flex flex-col space-y-0'}>
        <div>
          {
            typeof(props?.onNameClick) !== 'undefined'  &&
              typeof(props?.onNameClick) === 'function' ?
              <div onClick={() => props.onNameClick ? props.onNameClick(props) : ()=> {}}
                   className="text-lg ont-semibold avatar-status-name cursor-pointer">{props?.name}</div>
              :
              <div className="text-lg !m-0 !p-0 avatar-status-name font-semibold">{props?.name}</div>
          }
          <span>{props?.suffix}</span>
        </div>
        <div className="text-slate-500 avatar-status-subtitle">{props?.subTitle}</div>
      </div>
    </div>
  )
}
export default AvatarStatus;
