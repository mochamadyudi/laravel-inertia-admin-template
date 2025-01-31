import React from 'react';
import BaseLayout from "@/Components/layouts/base.layout";

const Page = () => {
  return (
    <React.Fragment>
      Email 1
    </React.Fragment>
  )
}

Page.layout = (children: any) => <BaseLayout children={children} />;

export default Page;
