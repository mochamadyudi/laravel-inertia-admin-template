import React from 'react';
import {FloatButton} from "antd";

const RedirectRegisterPartial: React.FC = () => {
  return (
    <FloatButton.Group trigger="hover" shape="circle" style={{ insetInlineEnd: 24 }} type={'primary'}>
      <FloatButton icon={null} description={'1'} type="primary" href={route('authorization.register.1')}/>
      <FloatButton icon={null} description={'2'} type="primary" href={route('authorization.register.2')}/>
      <FloatButton icon={null} description={'3'} type="primary" href={route('authorization.register.3')}/>
    </FloatButton.Group>
  )
};

export default RedirectRegisterPartial;
