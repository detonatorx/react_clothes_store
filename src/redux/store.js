import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

// const saveState = state => {
//   try {
//     const serialisedState = JSON.stringify(state);

//     window.localStorage.setItem('app_state', serialisedState);
//   } catch (err) {}
// };

// const loadState = () => {
//   try {
//     const serialisedState = window.localStorage.getItem('app_state');

//     if (!serialisedState) return undefined;

//     return JSON.parse(serialisedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// store.subscribe(() => {
//   saveState(store.getState());
// });

// const store = createStore(rootReducer, loadState());
export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);
