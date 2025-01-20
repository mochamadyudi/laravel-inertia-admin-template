import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducers from "@/Redux/reducers";
import rootSaga from '@/Redux/saga';
import { persistConfig } from '@/Redux/persist';
import { persistReducer, persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const persistedReducer = persistReducer(persistConfig, reducers);

function configureStore(preloadState?: any) {
    //@ts-ignore
    let composeEnhancers: any = composeWithDevTools || compose;

    const store = createStore(
        persistedReducer,
        preloadState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);
    if (typeof module !== 'undefined') {
        //@ts-ignore
        if (typeof module?.hot !== 'undefined') {
            //@ts-ignore
            module.hot.accept('@/Redux/reducers', () => {
                const nextRootReducer = require('@/Redux/reducers');
                store.replaceReducer(nextRootReducer);
            });
        }
    }

    return store;
}

const store = configureStore();
// @ts-ignore
export const persistor = persistStore(store);
export default store;
