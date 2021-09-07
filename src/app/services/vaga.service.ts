import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { IVaga } from 'src/models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private http: HttpClient) { }

  get(): Observable<IVaga>{
    return this.http.get<IVaga>(`${API_PATH}vaga`);
  }

  criar(request : IVaga): Observable<IVaga>{
    return this.http.post<IVaga>(`${API_PATH}vaga`,request);
  }

  getPorId(id: number): Observable<IVaga>{
    return this.http.get<IVaga>(`${API_PATH}vaga/${id}`);
  }

  alterar(id:number, request: IVaga){
    return this.http.put<IVaga>(`${API_PATH}vaga`,request);
  }

  
  excluir(id: number): Observable<any>{
    return this.http.delete(`${API_PATH}vaga/${id}`);
    
  }
}

