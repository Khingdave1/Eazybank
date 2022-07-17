import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { LedgerReportGroupService } from 'src/app/services/ledger-report-group.service';

@Component({
  selector: 'app-edit-ledger-report-group',
  templateUrl: './edit-ledger-report-group.component.html',
  styleUrls: ['./edit-ledger-report-group.component.css']
})
export class EditLedgerReportGroupComponent implements OnInit {

  ledgerReportGroupForm: any = FormGroup;
  currentItem: any;
  currentLedgerReportGroupId: any

  constructor(
    private formBuilder: FormBuilder,
    private ledgerReportGroupService: LedgerReportGroupService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    // Get the current course Id from the url
    this.activatedRoute.params.subscribe((params: any) => {
      this.currentLedgerReportGroupId = params.id
    })

    // Get currency Code
    this.ledgerReportGroupService.getLedgerReportGroup().subscribe((res: any) => {
      res.responseResult.forEach((e: any) => {
        if (e.ledgerReportGroupCode === this.currentLedgerReportGroupId) {
          this.currentItem = e
          console.log(this.currentItem)
        }
      });
    })


    // Ledger Report Group Form
    this.ledgerReportGroupForm = this.formBuilder.group({
      ledgerReportGroupCode: ['', Validators.required],
      ledgerReportGroupTitle: ['', Validators.required],
      ledgerTypeCode: ['', Validators.required],
    });
  }

  editLedgerReportGroup() {
    let payload = {
      "ledgerReportGroupCode": this.ledgerReportGroupForm.value.ledgerReportGroupCode,
      "ledgerReportGroupTitle": this.ledgerReportGroupForm.value.ledgerReportGroupTitle,
      "ledgerTypeCode": this.ledgerReportGroupForm.value.ledgerTypeCode,
      "addedBy": 'Eazybank'
    }
    console.log(payload)


    this.ledgerReportGroupService.editLedgerReportGroup(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-ledger-report-group'])

        },
        error: (e) => console.error(e),
      })
  }

}
