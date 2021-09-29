import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'

export default function (preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [thunk],
        preloadedState
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducer', () => store.replaceReducer(rootReducer));
    }
    return store
}