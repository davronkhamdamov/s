import { createStore } from 'redux';
import { joinedreduser } from './combineredux';
const store = createStore(
  joinedreduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
