import * as AccountActions from './account.actions';
import { AccountInitialState, AppState } from './account.states';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Action = AccountActions.All;

const accountInitialState: AccountInitialState =  {
    loading: false,
    data: [],
    hasMore: true, 
    page: 1
};

export function AccountReducer(state = accountInitialState, action: Action): AccountInitialState {

    switch (action.type) {
        case AccountActions.SET_LOADING:
            return {...state, loading: action.payload}; 

        case AccountActions.ADD:
            return {...state, loading: false, data: [...state.data, ...action.payload]};

        case AccountActions.UPDATE_NEXT_PAGE:
            return {...state, loading: false, page: action.payload.page, 
                    hasMore: action.payload.hasMore};

        default:
            return state;
    }

}


export const getAccountState = createFeatureSelector<AppState>('accountFeature');

export const getLoading = createSelector(
    getAccountState, 
    (state: AppState) => state.accountInitialState.loading
)

export const getAccountData = createSelector(
    getAccountState,
    (state: AppState) => state.accountInitialState.data
);

export const getHasMore = createSelector(
    getAccountState, 
    (state: AppState) => state.accountInitialState.hasMore
)

export const getPage = createSelector(
    getAccountState, 
    (state: AppState) => state.accountInitialState.page
)
