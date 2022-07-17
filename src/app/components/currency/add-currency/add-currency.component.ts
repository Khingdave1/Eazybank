import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CurrencyService } from 'src/app/services/currency.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {

  currencyForm: any = FormGroup;
  currCodeValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currencyForm = this.formBuilder.group({
      currCode: ['', Validators.required],
      currName: ['', Validators.required],
      isoCurrCode: ['', Validators.required],
      addedBy: ['', Validators.required]
    });
  }
  // Currency Form
  // currencyForm: FormGroup = this.formBuilder.group({
  //   currCode: ['', Validators.required],
  //   currName: ['', Validators.required],
  //   isoCurrCode: ['', Validators.required],
  //   addedBy: ['', Validators.required]
  // });

  addCurrencyRate() {
    let payload = {
      currCode: this.currencyForm.value.currCode,
      currName: this.currencyForm.value.currName,
      isoCurrCode: this.currencyForm.value.currCode,
      addedBy: 'Eazybank'
    }
    console.log(payload)


    // this.currencyService.addCurrency(this.currencyForm.value).subscribe((res: any) => {
    //   console.log(res)
    // })


    this.currencyService.addCurrencyTwo(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-currency'])

        },
        error: (e) => console.error(e),
      })
  }

}
