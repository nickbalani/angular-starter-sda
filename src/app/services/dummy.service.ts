import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Dummy[]> {
    return this.http.get<Dummy[]>(`${environment.apiUrl}/clients`);
  }

  getById(id: number): Observable<Dummy> {
    return this.http.get<Dummy>(`${environment.apiUrl}/clients/${id}`);
  }

  save(request: SaveDummyRequest): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/clients`, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`);
  }
}

export interface Dummy {
  id: number;
  name: string;
  createdAt: Date;
}

export interface SaveDummyRequest {
  id: number;
  name: string;
}
