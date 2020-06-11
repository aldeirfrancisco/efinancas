/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import reducers from './modules/rootReducers';

const devTools =
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();

const store = createStore(reducers, devTools);

export default store;
