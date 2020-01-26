import { Component } from '@angular/core';
import { AccountService} from './account/state/account.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'account-poc';

  constructor(private accountService: AccountService){

  }

  ngOnInit(){
    
  }

}
