import React from 'react';
import {Button, Typography} from 'antd';
import BaseLayout from "@/Components/layouts/base.layout";
import Lotties from "@/Components/general/Lotties";
import Animation from "@/assets/lotties/verified.json";
import {Icons} from '@/Components/general/Icons';

const Page = () => {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-layout-dark">
      <div className="w-full max-w-[520px] p-6 rounded-xl mx-auto space-y-10">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center justify-center">
            <Lotties width={180} animation={Animation}/>
            <Typography.Title level={1} className="!text-2xl">Email Verified Successfully</Typography.Title>
            <Typography.Paragraph>Your email has been successfully verified! Your account is now fully activated, and
              you can proceed to explore all features. If you encounter any issues, feel free to contact
              support.</Typography.Paragraph>
          </div>

          <Button
            type="primary"
            href={route('login')}
            size="large"
            icon={<Icons type={'ExportOutlined'}/>}
          >Explore Now</Button>
        </div>
      </div>
    </div>
  )
};

Page.layout = (children: React.ReactNode) => <BaseLayout children={children}/>;

export default Page;
