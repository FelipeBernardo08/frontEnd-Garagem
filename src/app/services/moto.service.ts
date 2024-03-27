import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moto } from '../interface/moto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(`${this.baseUrl}/moto/`, moto)
  }

  readMoto(): Observable<Moto[]> {
    return this.http.get<Moto[]>(`${this.baseUrl}/moto`);
  }

  updateMoto(moto: Moto, id: any,): Observable<Moto> {
    return this.http.put<Moto>(`${this.baseUrl}/moto/${id}`, moto);
  }

  deleteMoto(id: any): Observable<Moto> {
    return this.http.delete<Moto>(`${this.baseUrl}/moto/${id}`)
  }

  readMotoId(id: any): Observable<Moto> {
    return this.http.get<Moto>(`${this.baseUrl}/moto/${id}`);
  }
}
