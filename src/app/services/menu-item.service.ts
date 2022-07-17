import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  // Get Transaction Code
  getMenuItem() {
    return this.http.get(this.baseUrl + 'module-menu-item', this.getHttpOptions())
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
