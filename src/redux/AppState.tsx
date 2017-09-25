import { SlotState } from './models/Slot';
import { PitchState } from './models/Pitch';

export interface AppState {
  slots?: SlotState;
  pitch?: PitchState;
}
