import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/clients/${id}`);
  }

  save(request: SaveClientRequest): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/clients`, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`);
  }
}

export interface Client {
  id: number;
  name: string;
  createdAt: Date;
}

export interface SaveClientRequest {
  id: number;
  name: string;
}
