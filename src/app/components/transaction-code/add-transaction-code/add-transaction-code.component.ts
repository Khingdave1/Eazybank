import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransactionCodeService } from 'src/app/services/transaction-code.service';
import { first } from 'rxjs';
import { MenuItemService } from 'src/app/services/menu-item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-transaction-code',
  templateUrl: './add-transaction-code.component.html',
  styleUrls: ['./add-transaction-code.component.css']
})
export class AddTransactionCodeComponent implements OnInit {

  transactionCodeForm: any = FormGroup;
  transType: any;

  constructor(
    private formBuilder: FormBuilder,
    private tcService: TransactionCodeService,
    private toastr: ToastrService,
    private miService: MenuItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get Transaction Type
    this.tcService.getTransactionType().subscribe((res: any) => {
      this.transType = res.responseResult
      console.log(this.transType)
    })

    // this.miService.getMenuItem().subscribe((res: any) => {
    //   console.log(res)
    // })


    // Transaction Code Form
    this.transactionCodeForm = this.formBuilder.group({
      transCode: ['', Validators.required],
      transDesc: ['', Validators.required],
      transTypeId: [0, Validators.required],
      mainNarrative: ['', Validators.required],
      contraNarrative: ['', Validators.required],
      defaultContraAcct: ['', Validators.required],
      fixedContraAcct: [false, Validators.required],
      trackCount: [false, Validators.required],
      menuItemId: [0, Validators.required],
      userDefined: [false, Validators.required],
      addedBy: ['', Validators.required]
    });

  }

  addTransactionCode() {

    // if (this.transactionCodeForm.invalid) {
    //   return
    // }

    let payload = {
      "transCode": this.transactionCodeForm.value.transCode,
      "transDesc": this.transactionCodeForm.value.transDesc,
      "transTypeId": +this.transactionCodeForm.value.transTypeId,
      "mainNarrative": this.transactionCodeForm.value.mainNarrative,
      "contraNarrative": this.transactionCodeForm.value.contraNarrative,
      "defaultContraAcct": this.transactionCodeForm.value.defaultContraAcct,
      "fixedContraAcct": this.transactionCodeForm.value.fixedContraAcct,
      "trackCount": this.transactionCodeForm.value.trackCount,
      "menuItemId": 150510,
      "userDefined": true,
      "addedBy": "Eazybank",
    }


    // this.tcService.addTransactionCode(x).subscribe((res: any) => {
    //   console.log(res)
    // })


    this.tcService.addTransaction(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-transaction-code'])
        },
        error: (e) => {
          console.log(e)
          this.toastr.error(e)
        }
      })

  }
}
