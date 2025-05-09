import React from 'react';
import ScrumLayout, {ScrumLayoutContent} from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
const Page = (props: any) => {
  return (
    <ScrumLayoutContent
      title="Reports"
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
