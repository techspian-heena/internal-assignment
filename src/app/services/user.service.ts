import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = environment.apiEndPoint;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get(`${this.endPoint}/users`)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return res;
          }
        })
      );
  }

  addUser(user: User) {
    return this.http.post(`${this.endPoint}/users`, user, this.httpOptions)
      .pipe(
        map(res => {
          if (res) {
            return res;
          }
        })
      );
  }
}
