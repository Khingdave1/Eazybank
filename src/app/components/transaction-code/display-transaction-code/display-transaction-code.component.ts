import { Component, OnInit } from '@angular/core';
import { TransactionCodeService } from 'src/app/services/transaction-code.service';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ITransactionCode } from '../interfaces/transaction-code';


@Component({
  selector: 'app-display-transaction-code',
  templateUrl: './display-transaction-code.component.html',
  styleUrls: ['./display-transaction-code.component.css']
})
export class DisplayTransactionCodeComponent implements OnInit {

  transactionCodes!: ITransactionCode[];
  transactionCode!: ITransactionCode;
  loading: boolean = true;

  constructor(private tcService: TransactionCodeService, private toastr: ToastrService) { }

  ngOnInit(): void {

    // Get Transaction Code
    this.tcService.getTransactionCode().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.transactionCodes = res.responseResult;
        this.transactionCodes.forEach((t: any) => {
          this.transactionCode = t
        })
      },
      error: (e) => console.error(e),
      complete: () => {
        this.loading = false;
      },
    });

  }

  deleteTransactionCode(id: any) {
    this.tcService.deleteTransactionCode(id)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)
        },
        error: (e) => console.error(e),
      })

  }

  // prevent uncheck
  onCheck(e: any) {
    e.preventDefault();

    // In my case, I'm using the popup.
    // so once user confirms then hits api and update checkbox value.
    this.transactionCode.userDefined = true;
  }

}
