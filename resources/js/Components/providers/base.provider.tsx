import React from 'react';
import {IntlProvider} from 'react-intl';
import {App, ConfigProvider} from "antd";
import {useSelector} from "react-redux";
import AppLocale from "@/Lang";

type AntdProviderType = {
  children: React.ReactNode
}

const BaseProvider: React.FC<AntdProviderType> = ({children}) => {
  const locale: 'id' | 'en' = useSelector(({Theme}: any) => Theme?.locale ?? 'en')
  const direction: 'ltr' | 'rtl' | undefined = useSelector(({Theme}: any) => Theme?.direction ?? 'ltr')
  const currentAppLocale = AppLocale[locale ?? 'en'];
  return (
    <React.Fragment>
      <IntlProvider
        locale={currentAppLocale?.locale}
        messages={currentAppLocale?.messages}
      >
        <ConfigProvider
          locale={{
            locale
          }}
          direction={direction}
          theme={{
            cssVar: true,
          }}
        >
          <App>{children}</App>
        </ConfigProvider>
      </IntlProvider>
    </React.Fragment>

  )
}

export default BaseProvider;
