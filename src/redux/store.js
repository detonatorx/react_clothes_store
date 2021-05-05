import { createStore } from 'redux';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer, composeWithDevTools());

export default store;
