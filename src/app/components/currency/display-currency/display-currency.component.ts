import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { ICurrency } from '../interfaces/currency';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-display-currency',
  templateUrl: './display-currency.component.html',
  styleUrls: ['./display-currency.component.css']
})
export class DisplayCurrencyComponent implements OnInit {

  currencies!: ICurrency[];
  currency!: ICurrency;
  first: number = 0;
  loading: boolean = true;
  currentItem: any;

  constructor(private currencyService: CurrencyService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Get Currencies
    this.currencyService.getCurrencies().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.currencies = res.responseResult;
        this.currencies.forEach((c: any) => {
          this.currency = c
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

  reset() {
    this.first = 0;
  }

  // Delete
  deleteCurrency(currCode: any) {
    // this.currencyService.deleteCurrency(currCode).subscribe((res: any) => {
    //   console.log(res)
    // })

    this.currencyService.deleteCurr(currCode)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

        },
        error: (e) => console.error(e),
      })
  }


}
