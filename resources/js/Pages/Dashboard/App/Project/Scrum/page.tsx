import React from 'react';
import ScrumLayout, {ScrumLayoutContent} from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";
import {DeleteOutlined} from "@ant-design/icons";
const Page = (props: any) => {
  return (
    <ScrumLayoutContent
      title="Overview"
      useBreadcrumb
    >
      <React.Fragment>

      </React.Fragment>
    </ScrumLayoutContent>
  )
}

Page.layout = (children: React.ReactNode) => {
  // @ts-ignore
  return <TheLayout isFooter={false}><ScrumLayout children={children}/></TheLayout>
};

export default Page;
