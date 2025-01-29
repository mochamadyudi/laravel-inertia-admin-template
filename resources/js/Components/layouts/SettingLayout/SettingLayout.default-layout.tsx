import React from 'react';
import TheLayout, {TheLayoutInterface} from "@/Components/layouts/DefaultLayout/TheLayout";
import InnerLayout, {InnerLayoutProps} from "@/Components/layouts/inner-layout";

// @ts-ignore
type SettingLayoutDefaultLayoutProps =  {
  inner: Omit<InnerLayoutProps, 'children'>;
} & TheLayoutInterface

const SettingLayoutDefaultLayout: React.FC<SettingLayoutDefaultLayoutProps> = ({ inner, ...props }) => {
  return (
    <TheLayout type={'dashboard'} isFooter hasContainer={props?.hasContainer ?? false}>
      <InnerLayout {...inner}>
        {props.children}
      </InnerLayout>
    </TheLayout>
  )
};

export default SettingLayoutDefaultLayout;
