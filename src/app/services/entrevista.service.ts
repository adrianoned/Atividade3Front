import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { IEntrevista } from 'src/models/entrevista.model';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  constructor(private http: HttpClient) { }

  get(): Observable<IEntrevista>{
    return this.http.get<IEntrevista>(`${API_PATH}entrevista`);
  }

  criar(request : IEntrevista): Observable<IEntrevista>{
    return this.http.post<IEntrevista>(`${API_PATH}entrevista`,request);
  }

  getPorId(id: number): Observable<IEntrevista>{
    return this.http.get<IEntrevista>(`${API_PATH}entrevista/${id}`);
  }

  alterar(id:number, request: IEntrevista){
    return this.http.put<IEntrevista>(`${API_PATH}entrevista`,request);
  }

  
  excluir(id: number): Observable<any>{
    return this.http.delete(`${API_PATH}entrevista/${id}`);
    
  }
}

