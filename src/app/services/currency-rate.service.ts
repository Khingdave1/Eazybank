import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurrencyRate } from '../components/currency-rate/interfaces/currency-rate';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) { }

  // Get currencies rate
  getCurrenciesRate(): Observable<ICurrencyRate> {
    return this.http
      .get<ICurrencyRate>(`${this.baseUrl}currencies-rate`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency Rate fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Currency Rate'),
          )
        }),
      )
  }
  // Get currencies rate by posting date
  getCurrenciesRateByPostingDate(postingDate: any) {
    return this.http.get(this.baseUrl + 'currencies-rate/posting-date-get/' + postingDate, this.getHttpOptions())
  }
  // Get currencies rate by posting date
  getCurrenciesRateByCurrCode(currCode: any) {
    return this.http.get(this.baseUrl + 'currencies-rate/curr-code-get/' + currCode, this.getHttpOptions())
  }

  // Add Currency Rate
  addCurrenciesRate(data: any) {
    console.log(data)
    return this.http.post(this.baseUrl + 'currencies-rate', data, this.getHttpOptions())
  }

  addCurrRate(data: any): Observable<ICurrencyRate> {
    return this.http
      .post<ICurrencyRate>(`${this.baseUrl}currencies-rate`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency Rate added successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to add Currency Rate'),
          )
        }),
      )
  }

  // Update Currency Rate
  updateCurrenciesRate(data: any) {
    return this.http.put(this.baseUrl + 'currencies-rate', data, this.getHttpOptions())

  }

  updateCurrRate(data: any): Observable<ICurrencyRate> {
    return this.http
      .put<ICurrencyRate>(`${this.baseUrl}currencies-rate`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency Rate updated successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to update Currency Rate'),
          )
        }),
      )
  }

  // Delete Currency
  deleteCurrencyRate(currCode: any, postingDate: any) {
    return this.http.delete(`${this.baseUrl}currencies-rate/${currCode}/${postingDate}`, this.getHttpOptions())
  }

  deleteCurrRate(currCode: any, postingDate: any): Observable<ICurrencyRate> {
    return this.http
      .delete<ICurrencyRate>(`${this.baseUrl}currencies-rate/${currCode}/${postingDate}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Currency Rate deleted successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Currency Rate'),
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
