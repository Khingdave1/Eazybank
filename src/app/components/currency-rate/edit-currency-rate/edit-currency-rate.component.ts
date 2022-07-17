import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyRateService } from 'src/app/services/currency-rate.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-edit-currency-rate',
  templateUrl: './edit-currency-rate.component.html',
  styleUrls: ['./edit-currency-rate.component.css']
})
export class EditCurrencyRateComponent implements OnInit {

  currencyRateForm: any = FormGroup;
  currencyCode: any;
  currentItem: any;
  currentCurrencyeRateId: any;

  constructor(
    private formBuilder: FormBuilder,
    private currencyRateService: CurrencyRateService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the current course Id from the url
    this.activatedRoute.params.subscribe((params: any) => {
      this.currentCurrencyeRateId = params.id
    })

    // Get currency Code
    this.currencyRateService.getCurrenciesRateByCurrCode(this.currentCurrencyeRateId).subscribe((res: any) => {
      // this.currentItem = res.responseResult
      res.responseResult.forEach((e: any) => {
        this.currentItem = e
      });
    })

    this.currencyRateForm = this.formBuilder.group({
      currCode: ['', Validators.required],
      exchangeRate: ['', Validators.required],
      addedBy: ['Eazybank', Validators.required],
    });

  }

  editCurrencyRate() {
    var currentDate = new Date()

    let payload = {
      "currCode": this.currentItem.currCode,
      "exchangeRate": this.currencyRateForm.value.exchangeRate,
      // "postingDate": currentDate.toISOString(),
      "addedBy": 'Eazybank'
    }
    // console.log(payload)
    // this.currencyRateService.updateCurrenciesRate(payload).subscribe((res: any) => {
    //   console.log(res)
    // })

    this.currencyRateService.updateCurrRate(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-currency-rate'])
        },
        error: (e) => console.error(e),
      })
  }

}
