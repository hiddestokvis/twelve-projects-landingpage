import {
  compose,
  createStore,
  applyMiddleware,
  Store
} from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './AppState';
import { rootReducer } from './rootReducer';

interface MyWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__(): Function;
}

declare var window: MyWindow;

export function configureStore(initialState: AppState): Store<AppState> {
  let enhancer;
  if (process.env.NODE_ENV === 'production') {
    enhancer = compose(
      applyMiddleware(thunk)
    );
  } else {
    enhancer = compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  return store;
}
