import React from 'react';
import {FloatButton} from "antd";

const RedirectLoginPartial: React.FC = () => {
  return (
    <FloatButton.Group trigger="hover" shape="circle" style={{ insetInlineEnd: 24 }} type={'primary'}>
      <FloatButton icon={null} description={'1'} type="primary" href={route('authorization.login.1')}/>
      <FloatButton icon={null} description={'2'} type="primary" href={route('authorization.login.2')}/>
      <FloatButton icon={null} description={'3'} type="primary" href={route('authorization.login.3')}/>
    </FloatButton.Group>
  )
};

export default RedirectLoginPartial;
