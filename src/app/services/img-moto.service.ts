import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgMotoService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createImgMoto(formData: any) {
    return this.http.post(`${this.baseUrl}/imgMoto`, formData);
  }

  updateImgMoto(img: any, id: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/atualzar-imagem-moto/${id}`, img);
  }

  deleteImgMoto(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/imgMoto/${id}`)
  }
}
