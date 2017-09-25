import { Slot } from '../models/Slot';

export class SlotActions {
  static FETCH_SLOTS = 'FETCH_SLOTS';
  static FETCH_SLOTS_SUCCEEDED = 'FETCH_SUCCEEDED';
  static FETCH_SLOTS_FAILED = 'FETCH_SLOTS_FAILED';
  static INVALIDATE_SLOTS = 'INVALIDATE_SLOTS';

  static fetch(): Action {
    return ({
      type: SlotActions.FETCH_SLOTS,
      payload: null,
    });
  }

  static succeed(slots: { [key: number]: Slot }): Action {
    return ({
      type: SlotActions.FETCH_SLOTS_SUCCEEDED,
      payload: slots,
    });
  }

  static fail(): Action {
    return ({
      type: SlotActions.FETCH_SLOTS_FAILED,
      payload: null,
    });
  }

  static invalidate(): Action {
    return ({
      type: SlotActions.INVALIDATE_SLOTS,
      payload: null,
    });
  }
}
