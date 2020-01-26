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
  constructor() { }

  ngOnInit() {
    this.options.records.subscribe(val => {
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
      let sortDirection = false
      if (this.options.config.sortBy === headerName) {
        this.options.config.sortDirection = this.options.config.sortDirection === 'asc' ? 'desc' : 'asc'
        sortDirection = this.options.config.sortDirection === 'desc' ? true : false;
      }
      this.options.config.sortBy = headerName;
      this.sort(this.sortedData, this.options.config.sortBy, sortDirection,false);
    }
  }

  private sort = (arr,field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
    
      console.log("key", key)
  
    reverse = !reverse ? 1 : -1;
  
    return arr.sort(function(a, b) {
      return a = key(a), b = key(b), reverse * ((a as any > b as any) - (b as any > a as any));
    })
  }


}
