import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyService } from 'src/app/services/currency.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.css']
})
export class EditCurrencyComponent implements OnInit {

  currencyForm: any = FormGroup;
  currentItem: any;
  currentCurrencyeId: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private currencyService: CurrencyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the current course Id from the url
    this.activatedRoute.params.subscribe((params: any) => {
      this.currentCurrencyeId = params.id
    })

    // Get currency Code
    this.currencyService.getCurrencies().subscribe((res: any) => {
      res.responseResult.forEach((e: any) => {
        if (e.currCode === this.currentCurrencyeId) {
          this.currentItem = e
        }
      });
    })

    this.currencyService.getCurrenciesByLookup().subscribe((res: any) => {
      // console.log(res)
    })

    // Currency Rate Form
    this.currencyForm = this.formBuilder.group({
      currCode: ['', Validators.required],
      currName: ['', Validators.required],
    });


  }

  editCurrency() {
    let payload = {
      "currCode": this.currencyForm.value.currCode,
      "currName": this.currencyForm.value.currName,
      "isoCurrCode": this.currentItem.isoCurrCode,
      "addedBy": this.currentItem.addedBy,
    }

    this.currencyService.editCurrency(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-currency'])
        },
        error: (e) => {
          console.error(e)
          this.toastr.error(e)
        }
      })
  }

}
