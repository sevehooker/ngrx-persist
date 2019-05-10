    import { createSelector } from '@ngrx/store';
     
    export interface AppState {
      state: object[]
    };
     
    export const selectState = (state: AppState) => {
      console.log(state);
      return state.state;
    }
