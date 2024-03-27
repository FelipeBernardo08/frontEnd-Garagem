import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  readUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/recuperarUser`);
  }
}
