import React from "react";
import {FormattedMessage, injectIntl} from "react-intl";

const IntlMessage = (props: any) => <FormattedMessage {...props} />;

export const setLocale = (isLocaleOn:boolean, localeKey: any) =>{
  return isLocaleOn ? typeof(localeKey) !=='undefined' ?  <IntlMessage id={localeKey} />: '' : localeKey.toString();
}

export default injectIntl(IntlMessage, {
  //@ts-ignore
  withRef: false
});

