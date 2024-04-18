import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../utils/enviroment_config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = new BehaviorSubject<boolean>((localStorage.getItem('isLoggedIn') == "true") ?? false);
  authToken = new BehaviorSubject<string>(localStorage.getItem("jwt") ?? '');

  constructor(private http: HttpClient) { }

  logout(): void {
    // Implement logout logic here
  }
  login(user_data:any): Observable<any> {
    // Implement login logic here
    let httpHeaders = new HttpHeaders({
    })
    return this.http.post(API_ENDPOINTS.login, user_data, { headers: httpHeaders }
    )
  }
  register(user_data: any): Observable<any> {

    let httpHeaders = new HttpHeaders({
      // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    })
    return this.http.post(API_ENDPOINTS.register, user_data, { headers: httpHeaders }
    )
  }

}
