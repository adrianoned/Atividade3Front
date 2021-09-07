import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { ICandidato } from 'src/models/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  constructor(private http: HttpClient) { }

  get(): Observable<ICandidato>{
    return this.http.get<ICandidato>(`${API_PATH}candidato`);
  }

  criar(request : ICandidato): Observable<ICandidato>{
    return this.http.post<ICandidato>(`${API_PATH}candidato`,request);
  }

  getPorId(id: number): Observable<ICandidato>{
    return this.http.get<ICandidato>(`${API_PATH}candidato/${id}`);
  }

  alterar(id:number, request: ICandidato){
    return this.http.put<ICandidato>(`${API_PATH}candidato`,request);
  }

  
  excluir(id: number): Observable<any>{
    return this.http.delete(`${API_PATH}candidato/${id}`);
    
  }
}

