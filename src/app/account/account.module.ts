import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './state/reducer';
import { VTableComponent } from '../common/v-table/v-table.component';

const routes:Routes = [
  {
    path: '', component: AccountComponent 
  }
]


@NgModule({
  declarations: [AccountComponent,VTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('accountFeature', reducers, {metaReducers}),    

    StoreDevtoolsModule.instrument()
  ], 
})
export class AccountModule { }
