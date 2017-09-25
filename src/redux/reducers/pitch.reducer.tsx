import { PitchActions } from '../actions/pitch.actions';
import { PitchState, Pitch } from '../models/Pitch';

const originalState: Pitch = {
  person: {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    postal_code: '',
    city: '',
  },
  pitch: {
    description: '',
    link: '',
    slot_id: null,
  },
  acceptTerms: false,
};

const initialState: PitchState = {
  isSubmitting: false,
  failed: false,
  item: {
    person: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      address: '',
      postal_code: '',
      city: '',
    },
    pitch: {
      description: '',
      link: '',
      slot_id: null,
    },
    acceptTerms: false,
  },
};

export const PitchReducer: ActionReducer<PitchState> = (state: PitchState = initialState, action: Action) => {
  switch (action.type) {
    case PitchActions.UPDATE_PITCH:
      return Object.assign({}, state, {
        item: action.payload,
      });
    case PitchActions.SUBMIT_PITCH:
      return Object.assign({}, state, {
        isSubmitting: true,
        didInvalidate: false,
        failed: false,
      });
    case PitchActions.SUBMIT_PITCH_SUCCEEDED:
      return Object.assign({}, state, {
        isSubmitting: false,
        didInvalidate: false,
        failed: false,
        item: originalState,
      });
    case PitchActions.SUBMIT_PITCH_FAILED:
      return Object.assign({}, state, {
        isSubmitting: false,
        didInvalidate: true,
        failed: true,
      });
    default:
      return state;
  }
};
