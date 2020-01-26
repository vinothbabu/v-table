import { IAccount } from './account.model';

export interface AppState {
    accountInitialState?: AccountInitialState;
}

export interface AccountInitialState{
    loading?: boolean
    page?: number
    data?: IAccount[]
    hasMore?: boolean,
}