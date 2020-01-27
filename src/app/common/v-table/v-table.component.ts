import { Component, OnInit, Input } from '@angular/core';
import { VTableOptions } from './vtable.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'v-table',
  templateUrl: './v-table.component.html',
  styleUrls: ['./v-table.component.css']
})
export class VTableComponent implements OnInit {

  @Input() options: VTableOptions;
  sortedData
  _sortDataSub: Subscription
  constructor() { }

  ngOnInit() {
    this._sortDataSub = this.options.records.subscribe(val => {
      // deal with asynchronous Observable result
      this.sortedData = val;
    })
  }

  isSorting(name: string) {
    return this.options.config.sortBy !== name && name !== '';
  };
  
  isSortAsc(name: string) {
    var isSortAsc: boolean = this.options.config.sortBy === name && 
      this.options.config.sortDirection === 'asc';
    return isSortAsc;
  };
  
  isSortDesc(name: string) {
    var isSortDesc: boolean = this.options.config.sortBy === name && 
      this.options.config.sortDirection === 'desc';
    return isSortDesc;
  };

  getValue(row, column){
    return column.value.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  sortHeader(headerName: string) {
    if (headerName) {
      if (this.options.config.sortBy === headerName) {
        this.options.config.sortDirection = this.options.config.sortDirection === 'asc' ? 'desc' : 'asc'
      }
      this.options.config.sortBy = headerName;
 
      this.sort(this.sortedData, this.options.config.sortBy, this.options.config.sortDirection);
    }
  }

  private sort = (arr,field, reverse) => {
    return arr.sort((a,b) => {

        let x = reverse === "asc" ? a : b
        let y = reverse === "asc" ? b : a
    
        if(isNaN(arr[0][field])){
          if(isNaN(arr[0][field].split("-")[1])){
            return x[field].localeCompare(y[field])
          }
        }else{
            return x[field] - y[field] 
        }
    })
  }

  ngOnDestroy(){
    this._sortDataSub.unsubscribe();
  }


}
