import { Component, OnInit } from '@angular/core';
import { AccountService } from '../state/account.service';
import { Store } from '@ngrx/store';
import { AccountInitialState } from '../state/account.states';
import * as AccountReducer from '../state/account.reducers';
import { Observable, Subscription } from 'rxjs';
import { Account, IAccount } from '../state/account.model';
import { VTableColumnDefinition } from 'src/app/common/v-table/vtable.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account$: Observable<IAccount[]>
  loading$: Observable<boolean>

  hasMore: boolean
  page: number

  tableOptions: Object

  constructor(private accountService: AccountService,
    private store: Store<AccountInitialState>) {

  }

  ngOnInit() {
    
    this.account$ = this.store.select(AccountReducer.getAccountData);
    this.loading$ = this.store.select(AccountReducer.getLoading);

    this.store.select(AccountReducer.getHasMore).subscribe(data => this.hasMore = data)
    this.store.select(AccountReducer.getPage).subscribe(data => this.page = data)
    this.fetchAccountInfo();
    this.initTableOptions();
  }

  loadMore() {
    this.fetchAccountInfo();
  }

  private fetchAccountInfo() {
    if (this.hasMore) {
      this.accountService.get(this.page);
    }
  }

  initTableOptions() {
    var columns : VTableColumnDefinition[] = [
      { name: 'Account', value: 'account'},
      { name: 'Change', value: 'change'}      
    ];

    this.tableOptions = {
      records: this.account$,
      columns: columns,
      config: {
        sortDirection: "asc",
      },
    };
    
  }

}
