import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { ITecnologia } from 'src/models/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  constructor(private http: HttpClient) { }

  get(): Observable<ITecnologia>{
    return this.http.get<ITecnologia>(`${API_PATH}tecnologia`);
  }

  criar(request : ITecnologia): Observable<ITecnologia>{
    return this.http.post<ITecnologia>(`${API_PATH}tecnologia`,request);
  }

  getPorId(id: number): Observable<ITecnologia>{
    return this.http.get<ITecnologia>(`${API_PATH}tecnologia/${id}`);
  }

  alterar(id:number, request: ITecnologia){
    return this.http.put<ITecnologia>(`${API_PATH}tecnologia`,request);
  }

  
  excluir(id: number): Observable<any>{
    return this.http.delete(`${API_PATH}tecnologia/${id}`);
    
  }
}
