import { SlotActions } from '../actions/slot.actions';
import { SlotState } from '../models/Slot';

const initialState: SlotState = {
  isFetching: false,
  didInvalidate: true,
  failed: false,
  items: {}
};

export const SlotReducer: ActionReducer<SlotState> = (state: SlotState = initialState, action: Action) => {
  switch (action.type) {
    case SlotActions.FETCH_SLOTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        failed: false,
      });
    case SlotActions.FETCH_SLOTS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        failed: false,
        items: action.payload,
      });
    case SlotActions.FETCH_SLOTS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        failed: true,
      });
    case SlotActions.INVALIDATE_SLOTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        failed: false,
      });
    default:
      return state;
  }
};
