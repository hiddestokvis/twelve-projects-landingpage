import { combineReducers } from 'redux';
import * as Redux from 'redux';
import { SlotReducer } from './reducers/slot.reducer';
import { PitchReducer } from './reducers/pitch.reducer';

export const rootReducer: Redux.Reducer<{}> = combineReducers<{}>({
  slots: SlotReducer,
  pitch: PitchReducer,
});
