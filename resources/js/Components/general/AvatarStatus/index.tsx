import React from 'react';
import {Avatar, Typography} from 'antd';
import {AvatarStatusAttr} from "@/Components/general/AvatarStatus/type";
import {Icons} from "@/Components/general/Icons";

const AvatarStatus:React.FC<AvatarStatusAttr> = (props) => {
  function _onClickName(){
    if(typeof props?.onNameClick !== 'undefined' && typeof props?.onNameClick === 'function'){
      props?.onNameClick(props)
    }
  }

  return (
    <div className={`avatar-status avatar-status-size-${props?.avatar?.size ?? 'default'}`}>
      <Avatar
        {...props.avatar}
        className={`ant-avatar-${props?.avatar?.type} ${props?.avatar?.className ?? ''}`}
        icon={props?.avatar?.icon ?? <Icons type={'UserOutlined'} style={{ color: 'var(--ant-color-primary-active)'}} />}
        onError={()=> true}
        style={{
          ...props?.avatar?.style,
          backgroundColor: props?.avatar?.style?.backgroundColor ?? `var(--ant-color-primary-border)`,
          border: props?.avatar?.style?.border ?? '1px solid var(--ant-color-primary-active)'
        }}
      />
      <div className={'avatar-status-content'}>
        <div className={'avatar-status-title'}>
          <Typography.Paragraph
            onClick={_onClickName}
            className={'avatar-status-title-content'}
          >
            {props?.name}
          </Typography.Paragraph>
          {props?.suffix && (
            <Typography.Paragraph className={'avatar-status-suffix'}>{props?.suffix}</Typography.Paragraph>
          )}
        </div>
        <div className=" avatar-status-subtitle">{props?.subTitle}</div>
      </div>
    </div>
  )
}
export default AvatarStatus;
