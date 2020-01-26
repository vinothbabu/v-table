import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './account.states';
import * as fromAccountReducer from './account.reducers';


export const reducers: ActionReducerMap<AppState> = {
    accountInitialState: fromAccountReducer.AccountReducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
      if (action.type === 'clear state') {
        state = undefined;
      }
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = [logger]; 
