import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItemService } from 'src/app/services/menu-item.service';
import { TransactionCodeService } from 'src/app/services/transaction-code.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-edit-transaction-code',
  templateUrl: './edit-transaction-code.component.html',
  styleUrls: ['./edit-transaction-code.component.css']
})
export class EditTransactionCodeComponent implements OnInit {

  transactionCodeForm: any = FormGroup;
  transType: any;
  currentTransactionCodeId: any;
  currentItem: any;

  constructor(
    private formBuilder: FormBuilder,
    private tcService: TransactionCodeService,
    private toastr: ToastrService,
    private miService: MenuItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Get the current course Id from the url
    this.activatedRoute.params.subscribe((params: any) => {
      this.currentTransactionCodeId = params.id
    })

    // Get transactionCode and set as currentitem
    this.tcService.getTransactionCode().subscribe((res: any) => {
      // Get the currentitem if its equal to the currentTransactionCodeId
      res.responseResult.forEach((e: any) => {
        if (e.transCode === this.currentTransactionCodeId) {
          this.currentItem = e
          console.log(this.currentItem)
        }
      });

    })

    // Get Transaction Type
    this.tcService.getTransactionType().subscribe((res: any) => {
      this.transType = res.responseResult
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
      addedBy: ['', Validators.required]
    });

  }

  editTransactionCode() {

    let payload = {
      "transCode": this.currentItem.transCode,
      "transDesc": this.transactionCodeForm.value.transDesc,
      "transTypeId": +this.transactionCodeForm.value.transTypeId,
      "mainNarrative": this.transactionCodeForm.value.mainNarrative,
      "contraNarrative": this.transactionCodeForm.value.contraNarrative,
      "defaultContraAcct": this.transactionCodeForm.value.defaultContraAcct,
      "fixedContraAcct": this.transactionCodeForm.value.fixedContraAcct,
      "trackCount": this.transactionCodeForm.value.trackCount,
      "menuItemId": this.currentItem.menuItemId,
      "userDefined": this.currentItem.userDefined,
      "addedBy": "Eazybank",
    }

    this.tcService.editTransaction(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-transaction-code'])
        },
        error: (e) => console.error(e),
      })

  }

}
