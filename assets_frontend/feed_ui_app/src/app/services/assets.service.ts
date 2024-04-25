import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../utils/enviroment_config';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }


  getTrandingAssets(): Observable<any> {
    // Implement login logic here
    let httpHeaders = new HttpHeaders({
    })
    return this.http.get(API_ENDPOINTS.get_tranding_assets, { headers: httpHeaders }
    )
  }


}
