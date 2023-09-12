import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  public baseurl = environment.baseurl;
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get(`${this.baseurl}Users`);
  }
  postUserData(userData: any): Observable<any> {
    return this.http.post(`${this.baseurl}Users`, {
      ...userData,
      id: +userData.id,
    });
  }
  // putUserData(userData: any): Observable<any> {
  //   console.log(userData);
  //   const id = +userData.id;
  //   return this.http.put(`${this.baseurl}Users/${id}`, userData);
  // }
}
