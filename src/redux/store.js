import { createStore } from 'redux';
// import applyMiddleware from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';

const saveState = state => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {}
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
