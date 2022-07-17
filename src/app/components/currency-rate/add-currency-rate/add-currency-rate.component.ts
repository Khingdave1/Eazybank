import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyRateService } from 'src/app/services/currency-rate.service';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CurrencyService } from 'src/app/services/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-currency-rate',
  templateUrl: './add-currency-rate.component.html',
  styleUrls: ['./add-currency-rate.component.css']
})
export class AddCurrencyRateComponent implements OnInit {

  currencyRateForm: any = FormGroup;
  currencyCode: any;

  constructor(
    private formBuilder: FormBuilder,
    private currencyRateService: CurrencyRateService,
    private toastr: ToastrService,
    private currencyService: CurrencyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currencyRateForm = this.formBuilder.group({
      currCode: ['', Validators.required],
      exchangeRate: ['', Validators.required],
    });

    // Get currency Code
    this.currencyService.getCurrencies().subscribe((res: any) => {
      this.currencyCode = res.responseResult
      // res.responseResult.forEach((e: any) => {
      //   this.currencyCode = e.currCode
      //   console.log(this.currencyCode)
      // });
    })

  }

  addCurrencyRate() {

    // Get Current time
    var currentDate = new Date()

    let payload = {
      "currCode": this.currencyRateForm.value.currCode,
      "exchangeRate": this.currencyRateForm.value.exchangeRate,
      // "postingDate": currentDate.toISOString(),
      "addedBy": 'Eazybank'
    }

    this.currencyRateService.addCurrRate(payload)
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
