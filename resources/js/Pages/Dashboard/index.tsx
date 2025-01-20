import React from 'react';
import {Typography} from "antd";
import AvatarStatus from "@/Components/general/AvatarStatus";

const Page = () => {
    return (
        <React.Fragment>
            <Typography.Title level={1}>Page</Typography.Title>
          <AvatarStatus
            name={'John Doe'}
            subTitle={'Lorem ipsum dolor sit amet'}
          />
        </React.Fragment>
    )
}

Page.layout = (page: any) => {
    return (
        <div>
            {page?.children}
        </div>
    )
}

export default Page;
