import { Pitch } from '../models/Pitch';

export class PitchActions {
  static UPDATE_PITCH = 'UPDATE_PITCH';
  static SUBMIT_PITCH = 'SUBMIT_PITCH';
  static SUBMIT_PITCH_SUCCEEDED = 'SUBMIT_PITCH_SUCCEEDED';
  static SUBMIT_PITCH_FAILED = 'SUBMIT_PITCH_FAILED';

  static update(pitch: Pitch): Action {
    return ({
      type: PitchActions.UPDATE_PITCH,
      payload: pitch,
    });
  }

  static submit(): Action {
    return ({
      type: PitchActions.SUBMIT_PITCH,
      payload: null,
    });
  }

  static succeed(): Action {
    return ({
      type: PitchActions.SUBMIT_PITCH_SUCCEEDED,
      payload: null,
    });
  }

  static fail(): Action {
    return ({
      type: PitchActions.SUBMIT_PITCH_FAILED,
      payload: null,
    });
  }
}
