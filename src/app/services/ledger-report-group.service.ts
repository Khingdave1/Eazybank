import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILedgerReportGroup } from '../components/ledger-report-group/interfaces/ledger-report-group';

@Injectable({
  providedIn: 'root'
})
export class LedgerReportGroupService {
  baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) { }

  // Get Ledger Report Group
  // getLedgerReportGroup() {
  //   return this.http.get(this.baseUrl + 'ledger-report-group', this.getHttpOptions())
  // }

  getLedgerReportGroup(): Observable<ILedgerReportGroup> {
    return this.http
      .get<ILedgerReportGroup>(`${this.baseUrl}ledger-report-group`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Ledger Report Group fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Ledger Report Group'),
          )
        }),
      )
  }

  // Get Ledger Type Code
  getLedgerTypeCode(): Observable<ILedgerReportGroup> {
    return this.http
      .get<ILedgerReportGroup>(`${this.baseUrl}ledger-type-code`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Ledger Type Code fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Ledger Type Code'),
          )
        }),
      )
  }

  // Add Ledger Report Group
  addLedgerReportGroup(data: any): Observable<ILedgerReportGroup> {
    return this.http
      .post<ILedgerReportGroup>(`${this.baseUrl}ledger-report-group`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Ledger Report Group added successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to add Ledger Report Group'),
          )
        }),
      )
  }

  // Edit Ledger Report Group
  editLedgerReportGroup(data: any): Observable<ILedgerReportGroup> {
    return this.http
      .put<ILedgerReportGroup>(`${this.baseUrl}ledger-report-group`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Ledger Report Group updated successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to updated Ledger Report Group'),
          )
        }),
      )
  }

  // Delete Ledger Report Group
  deleteLedgerReportGroup(reportGroupCode: any): Observable<ILedgerReportGroup> {
    return this.http
      .delete<ILedgerReportGroup>(`${this.baseUrl}ledger-report-group/${reportGroupCode}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Ledger Report Group deleted successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Ledger Report Group'),
          )
        }),
      )
  }

  // Get HttpOptions
  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return httpOptions
  }
}
