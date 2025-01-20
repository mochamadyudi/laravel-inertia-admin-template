import React from 'react';
import store, {persistor} from '@/Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import BaseProvider from "@/Components/providers/base.provider";

const BaseLayout: React.FC<any> = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BaseProvider>
                    {children}
                </BaseProvider>
            </PersistGate>
        </Provider>
    )
}

export default BaseLayout;
