import { Action } from '@ngrx/store';

export const SET_LOADING = 'SHOW LOADING';
export const ADD = 'ADD RESPONSE DATA';
export const UPDATE_NEXT_PAGE = 'UPDATE NEXT PAGE';

export class setLoading implements Action {
    readonly type = SET_LOADING;
    constructor(public payload: any) { }
}

export class add implements Action {
    readonly type = ADD;
    constructor(public payload: any) { }
}

export class updatePage implements Action {
    readonly type = UPDATE_NEXT_PAGE;
    constructor(public payload: any) { }
}

export type All = setLoading | add | updatePage