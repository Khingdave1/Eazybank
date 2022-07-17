import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { LedgerReportGroupService } from 'src/app/services/ledger-report-group.service';

@Component({
  selector: 'app-add-ledger-report-group',
  templateUrl: './add-ledger-report-group.component.html',
  styleUrls: ['./add-ledger-report-group.component.css']
})
export class AddLedgerReportGroupComponent implements OnInit {

  ledgerReportGroupForm: any = FormGroup;
  ledgerTypeCodes: any;

  constructor(
    private formBuilder: FormBuilder,
    private ledgerReportGroupService: LedgerReportGroupService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get Ledger Type Codes
    this.ledgerReportGroupService.getLedgerTypeCode().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.ledgerTypeCodes = res.responseResult;
      },
      error: (e) => console.error(e),
    });

    // Ledger Report Group Form
    this.ledgerReportGroupForm = this.formBuilder.group({
      ledgerReportGroupCode: ['', Validators.required],
      ledgerReportGroupTitle: ['', Validators.required],
      ledgerTypeCode: ['', Validators.required],
    });
  }

  addLedgerReportGroup() {
    let payload = {
      "ledgerReportGroupCode": this.ledgerReportGroupForm.value.ledgerReportGroupCode,
      "ledgerReportGroupTitle": this.ledgerReportGroupForm.value.ledgerReportGroupTitle,
      "ledgerTypeCode": this.ledgerReportGroupForm.value.ledgerTypeCode,
      "addedBy": 'Eazybank'
    }
    console.log(payload)


    this.ledgerReportGroupService.addLedgerReportGroup(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-ledger-report-group'])

        },
        error: (e) => {
          console.log(e)
          this.toastr.error(e)
        }
      })
  }

}
