import React from "react";
import {FormattedMessage} from "react-intl";

interface IntlMessageInterface {
  id: string;
  valueDefault?: string | null;
}
const IntlMessage: React.FC<IntlMessageInterface> = ({ id, valueDefault }) => {
  // @ts-ignore
  function render(val: any){
    return Array.isArray(val) && val.includes(id) ?  valueDefault ?? null : val
  }

  return (
    <FormattedMessage id={id}>
      {/*@ts-ignore*/}
      {render}
    </FormattedMessage>
  )
};

export const setLocale = (isLocaleOn:boolean, localeKey: string, valueDefault: any = null) =>{
  return isLocaleOn ? typeof(localeKey) !=='undefined' ?  <IntlMessage id={localeKey} valueDefault={valueDefault ?? localeKey} />: '' : valueDefault
}
