import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartment } from '../components/department/interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) { }

  // Get Department
  getDepartmente() {
    return this.http.get(this.baseUrl + 'department', this.getHttpOptions())
  }

  getDepartment(): Observable<IDepartment> {
    return this.http
      .get<IDepartment>(`${this.baseUrl}department`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department fetched successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to fetch Department'),
          )
        }),
      )
  }

  // Add Department
  addDepartment(data: any): Observable<IDepartment> {
    return this.http
      .post<IDepartment>(`${this.baseUrl}department`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department added successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to add Department'),
          )
        }),
      )
  }

  // Edit Department
  editDepartment(data: any): Observable<IDepartment> {
    return this.http
      .put<IDepartment>(`${this.baseUrl}department`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department updated successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to updated Department'),
          )
        }),
      )
  }

  // Delete department
  deleteDepartment(deptCode: any): Observable<IDepartment> {
    return this.http
      .delete<IDepartment>(`${this.baseUrl}department/${deptCode}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department deleted successfully`, res)
          return of(res)
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Department'),
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
