export interface Slot {
  id: number;
  position: number;
  price: number;
  open: boolean;
  no_pitches: number;
}

export interface SlotState {
  isFetching: boolean;
  didInvalidate: boolean;
  failed: boolean;
  items: {
    [key: number]: Slot;
  };
}
