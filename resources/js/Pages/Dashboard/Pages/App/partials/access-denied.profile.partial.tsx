import React from 'react';
import {Button, Result} from "antd";

const AccessDeniedProfilePartial: React.FC = () => {
  return (
    <React.Fragment>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </React.Fragment>
  )
}

export default AccessDeniedProfilePartial;
