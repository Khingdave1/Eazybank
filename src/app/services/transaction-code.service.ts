import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransactionCode } from '../components/transaction-code/interfaces/transaction-code';

@Injectable({
  providedIn: 'root'
})
export class TransactionCodeService {
  baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) { }

  // Get Transaction Code
  getTransactionCodee() {
    return this.http.get(this.baseUrl + 'trans-code', this.getHttpOptions())
  }

  getTransactionCode(): Observable<ITransactionCode> {
    return this.http
      .get<ITransactionCode>(`${this.baseUrl}trans-code`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Transaction Code fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Transaction Code'),
          )
        }),
      )
  }

  // Get Transaction Type
  getTransactionType() {
    return this.http.get(this.baseUrl + 'trans-type', this.getHttpOptions())
  }

  // Add Transaction Code
  addTransactionCode(data: any) {
    return this.http.post(this.baseUrl + 'trans-code', data, this.getHttpOptions())
  }

  addTransaction(data: any): Observable<ITransactionCode> {
    return this.http
      .post<ITransactionCode>(`${this.baseUrl}trans-code`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Transaction Code added successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to add Transaction Code'),
          )
        }),
      )
  }

  // Edit Transaction Code
  editTransactionCode(data: any) {
    return this.http.put(this.baseUrl + 'trans-code', data, this.getHttpOptions())
  }

  editTransaction(data: any): Observable<ITransactionCode> {
    return this.http
      .put<ITransactionCode>(`${this.baseUrl}trans-code`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Transaction Code updated successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to update Transaction Code'),
          )
        }),
      )
  }

  // Delete Transaction Code by Transaction code
  // deleteTransactionCode(dataId: any) {
  //   return this.http.delete(this.baseUrl + 'TransCode/' + dataId, this.getHttpOptions())
  // }

  deleteTransactionCode(transCode: any): Observable<ITransactionCode> {
    return this.http
      .delete<ITransactionCode>(`${this.baseUrl}trans-code/${transCode}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Transaction Code delete successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Transaction Code'),
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmM2MGYzY2U5ODM1ZGE4ZmJkMDk5MiIsImZ1bGxuYW1lIjoiRGF2ZSBwYXJlbnQiLCJyb2xlIjoicGFyZW50IiwiaWF0IjoxNjU3NTY0Nzk4LCJleHAiOjE2NTc2NTExOTh9.iMAnHcu8686hbH2BKceV_aw-voGz3gB4ASPedCl1HBc
