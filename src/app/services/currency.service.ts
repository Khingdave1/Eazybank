import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurrency } from '../components/currency/interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) { }

  // Get currencies
  getCurrencies(): Observable<ICurrency> {
    return this.http
      .get<ICurrency>(`${this.baseUrl}currency`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Currency'),
          )
        }),
      )
  }

  // Get currencies by posting date
  getCurrenciesByLookup() {
    return this.http.get(this.baseUrl + 'currency/lookup', this.getHttpOptions())
  }

  // Add Currency
  addCurrency(data: any) {
    return this.http.post(this.baseUrl + 'currency', this.getHttpOptions(), data)
  }

  addCurrencyTwo(data: any): Observable<ICurrency> {
    return this.http
      .post<ICurrency>(`${this.baseUrl}currency`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency added successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to add Currency'),
          )
        }),
      )
  }

  // Edit Currency
  editCurr(data: any) {
    return this.http.put(this.baseUrl + 'currency', this.getHttpOptions(), data)
  }

  editCurrency(data: any): Observable<ICurrency> {
    return this.http
      .put<ICurrency>(`${this.baseUrl}currency`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency updated successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to updated Currency'),
          )
        }),
      )
  }

  // Delete Currency
  deleteCurrency(dataId: any) {
    return this.http.delete(this.baseUrl + 'currency/' + dataId, this.getHttpOptions())
  }

  // Add Transaction Code by Transaction code
  deleteCurr(currCode: any): Observable<ICurrency> {
    return this.http
      .delete<ICurrency>(`${this.baseUrl}currency/${currCode}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency deleted successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Currency'),
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
