import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.logStatus.subscribe(
      (status: string) => {
        alert('NEW STATUS ' + status);
      }
    );
    }



  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountService.onAccountAdded(accountName, accountStatus);

   // this.loggingService.logStatusChange(accountStatus);

  //   const service = new LoggingService();
  // service.logStatusChange(accountStatus); // wrong approach
    // console.log('A server status changed, new status: ' + accountStatus);
  }

}
