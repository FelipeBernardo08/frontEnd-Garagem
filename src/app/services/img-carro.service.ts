import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagemCarro } from '../interface/imagem-carro';

@Injectable({
  providedIn: 'root'
})
export class ImgCarroService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createImgCarro(formData: any) {
    return this.http.post(`${this.baseUrl}/imgCarro`, formData);
  }

  readImg(id: any): Observable<ImagemCarro> {
    return this.http.get<ImagemCarro>(`${this.baseUrl}/imgCarro/${id}`);
  }

  updateImg(img: ImagemCarro, id: any): Observable<ImagemCarro> {
    return this.http.post<ImagemCarro>(`${this.baseUrl}/atualzar-imagem-carro/${id}`, img);
  }

  deleteImg(id: any): Observable<ImagemCarro> {
    return this.http.delete<ImagemCarro>(`${this.baseUrl}/imgCarro/${id}`)
  }

  apagarTodasImagens(img: ImagemCarro, id: any): Observable<ImagemCarro> {
    return this.http.post<ImagemCarro>(`${this.baseUrl}/apagar-imagem-carro/${id}`, img);
  }
}
