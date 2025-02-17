import React, {createContext, useContext, useEffect} from 'react';
import {IntlProvider} from 'react-intl';
import {App, ConfigProvider, theme} from "antd";
import {useDispatch, useSelector} from "react-redux";
import AppLocale from "@/Lang";
import {usePage} from "@inertiajs/react";
import { onSaveTheme, rehydrateThemeConfig} from "@/Redux/actions/Theme";

type AntdProviderType = {
  children: React.ReactNode
}

export type BaseContextType = {
  mode?: 'dark' | 'light' | null
}

export const BaseContext = createContext<BaseContextType>({
  mode: null
});
const BaseProvider: React.FC<AntdProviderType & BaseContextType> = ({children, mode = null})=>{
  return (
    <BaseContext.Provider value={{
      mode
    }}>
      <BaseConfiguration>
        {children}
      </BaseConfiguration>
    </BaseContext.Provider>
  )
}

const BaseConfiguration: React.FC<AntdProviderType & BaseContextType> = ({children}) => {
  const dispatch = useDispatch();
  const ctx = useContext(BaseContext);
  const themes: any = usePage<any>().props?.themes;
  const antd: any = useSelector(({Theme}: any)=> Theme?.antd)
  const _theme: any = useSelector(({Theme}: any)=> Theme)
  const locale: 'id' | 'en' = useSelector(({Theme}: any) => Theme?.locale ?? 'en')
  const direction: 'ltr' | 'rtl' | undefined = useSelector(({Theme}: any) => Theme?.direction ?? 'ltr')
  const currentAppLocale = AppLocale[locale ?? 'en'];

  useEffect(()=> {
    //@ts-ignore
    dispatch(rehydrateThemeConfig(themes?.antd))
  },[themes])

  useEffect(() => {
    if(!ctx.mode){
      if(new URLSearchParams(window.location.search).has('theme')){
        //@ts-ignore
        dispatch(onSaveTheme(new URLSearchParams(window.location.search).get('theme')))
      }
    }else{
      //@ts-ignore
      dispatch(onSaveTheme(ctx.mode))
    }
  },[ctx.mode]);

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
            algorithm: _theme.currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
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
