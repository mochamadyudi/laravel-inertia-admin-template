import React from 'react';
import store, {persistor} from '@/Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import BaseProvider from "@/Components/providers/base.provider";
import {Head, usePage} from "@inertiajs/react";
import MetaProvider from "@/Components/providers/meta.provider";

const BaseLayout: React.FC<any> = ({children}) => {
  const props = usePage<any>().props;
  return (
    <MetaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BaseProvider>
            {children}
          </BaseProvider>
        </PersistGate>
      </Provider>
    </MetaProvider>

  )
}

export default BaseLayout;
