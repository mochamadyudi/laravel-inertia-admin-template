import React, {useEffect} from 'react';
import {IntlProvider} from 'react-intl';
import {App, ConfigProvider} from "antd";
import {useDispatch, useSelector} from "react-redux";
import AppLocale from "@/Lang";
import {usePage} from "@inertiajs/react";
import {rehydrateThemeConfig} from "@/Redux/actions/Theme";

type AntdProviderType = {
  children: React.ReactNode
}

const BaseProvider: React.FC<AntdProviderType> = ({children}) => {
  const dispatch = useDispatch();
  const themes: any = usePage<any>().props?.themes;
  const antd: any = useSelector(({Theme}: any)=> Theme?.antd)
  const locale: 'id' | 'en' = useSelector(({Theme}: any) => Theme?.locale ?? 'en')
  const direction: 'ltr' | 'rtl' | undefined = useSelector(({Theme}: any) => Theme?.direction ?? 'ltr')
  const currentAppLocale = AppLocale[locale ?? 'en'];

  useEffect(()=> {
    //@ts-ignore
    dispatch(rehydrateThemeConfig(themes?.antd))
  },[themes])
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
            ...themes?.antd,
            ...antd
          }}
        >
          <App>{children}</App>
        </ConfigProvider>
      </IntlProvider>
    </React.Fragment>

  )
}

export default BaseProvider;
