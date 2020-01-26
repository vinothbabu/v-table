import { Injectable } from '@angular/core';
import { getAccountInfo } from '../account.data';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AccountInitialState } from './account.states';
import * as AccountActions  from '../state/account.actions';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private store: Store<AccountInitialState>) { }

  get(page: number) {
    this.store.dispatch(new AccountActions.setLoading(true))
    getAccountInfo({ page }).subscribe(res => this.updateAccountTransactionState(res));
  }

  private updateAccountTransactionState(res) {
    console.log("res", res)
    const nextPage = res.currentPage + 1;
    this.store.dispatch(new AccountActions.setLoading(false))
    console.log("nextPage", nextPage)
    this.store.dispatch(new AccountActions.updatePage({hasMore: res.hasMore, page: nextPage}))
    this.store.dispatch(new AccountActions.add(res.data))
  }

}
