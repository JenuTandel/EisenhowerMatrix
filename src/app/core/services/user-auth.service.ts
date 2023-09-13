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

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseurl}Users/${userId}`);
  }

  // putUserData(userId: any, userData: any): Observable<any> {
  //   const user: any = {};
  //   user.todo = userData;
  //   return this.http.put(`${this.baseurl}Users/${userId}`, user);
  // }
}
