// store.js

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  
import rootReducer from './indexReducer'; // Root reducer của ứng dụng

// Tạo Redux store với rootReducer và áp dụng middleware thunk
export const store = createStore(rootReducer, applyMiddleware(thunk),);

