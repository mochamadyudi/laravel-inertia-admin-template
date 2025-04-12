import React from 'react';
import ScrumLayout from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
const Page = (props: any) => {
  return (
    <ScrumLayout.Content
      title="Reports"
      useBreadcrumb
    >
      <React.Fragment>

      </React.Fragment>
    </ScrumLayout.Content>
  )
}

Page.layout = (children: React.ReactNode) => <ScrumLayout  children={children} />;

export default Page;
