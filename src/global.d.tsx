// Type definitions for landing-page
// Project: landing-page
// Definitions by: hidde stokvis <hidde@neverhide.nl>
//
declare module 'nested-property';
declare module 'react-scrollable-anchor';

interface Action {
  type: string;
  payload?: any;
}

interface ActionReducer<T> {
  (state: T, action: Action): T;
}
