import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LedgerReportGroupService } from 'src/app/services/ledger-report-group.service';
import { ILedgerReportGroup } from '../interfaces/ledger-report-group';

@Component({
  selector: 'app-display-ledger-report-groups',
  templateUrl: './display-ledger-report-groups.component.html',
  styleUrls: ['./display-ledger-report-groups.component.css']
})
export class DisplayLedgerReportGroupsComponent implements OnInit {

  loading: boolean = true;
  ledgerReportGroups!: ILedgerReportGroup[];
  ledgerReportGroup!: ILedgerReportGroup;
  ledgerTypeCode: any;

  constructor(private ledgerReportGroupService: LedgerReportGroupService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Get Ledger Report Group
    this.ledgerReportGroupService.getLedgerReportGroup().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.ledgerReportGroups = res.responseResult;
        this.ledgerReportGroups.forEach((c: any) => {
          this.ledgerReportGroup = c
        })
      },
      error: (e) => console.error(e),
      complete: () => {
        this.loading = false;
      },
    });

    // Get Ledger Type Codes
    this.ledgerReportGroupService.getLedgerTypeCode().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.ledgerTypeCode = res.responseResult;
      },
      error: (e) => console.error(e),
    });
  }


  deleteLedgerReportGroup(reportGroupCode: any) {
    console.log(reportGroupCode)
    this.ledgerReportGroupService.deleteLedgerReportGroup(reportGroupCode)
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
