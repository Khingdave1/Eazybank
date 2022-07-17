import { Component, OnInit } from '@angular/core';
import { CurrencyRateService } from 'src/app/services/currency-rate.service';
import { ICurrencyRate } from '../interfaces/currency-rate';
import { first, finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-display-currency-rate',
  templateUrl: './display-currency-rate.component.html',
  styleUrls: ['./display-currency-rate.component.css']
})
export class DisplayCurrencyRateComponent implements OnInit {
  currenciesRate!: ICurrencyRate[];
  currencyRate!: ICurrencyRate;
  first: number = 0;
  loading: boolean = true;
  currentItem: any;

  constructor(private currencyRateService: CurrencyRateService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.currencyRateService.getCurrenciesRate().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.currenciesRate = res.responseResult;
        this.currenciesRate.forEach((c: any) => {
          this.currencyRate = c
        })
      },
      error: (e) => console.error(e),
      complete: () => {
        this.loading = false;
      },
    });

    // this.currencyRateService.getCurrenciesRateByPostingDate('2022-06-21T00:00:00').subscribe((res: any) => {
    //   console.log(res.responseResult)
    // })

    // this.currencyRateService.getCurrenciesRateByCurrCode('GBP').subscribe((res: any) => {
    //   console.log(res.responseResult)
    // })

  }

  // Delete
  deleteCurrencyRate(currCode: any, postingDate: any) {
    this.currencyRateService.deleteCurrRate(currCode, postingDate)
      .pipe(
        finalize(() => {
          this.ngOnInit();
        }),
      )
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

        },
        error: (e) => console.error(e),
      })
  }

}
