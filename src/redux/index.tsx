import { Store } from 'redux';
import { AppState } from './AppState';
import { configureStore } from './store';

export const store: Store<AppState> = configureStore({});
