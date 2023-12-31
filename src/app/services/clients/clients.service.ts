import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseContentDTO } from 'src/app/types/ResponseContentDTO';

export type Clients = {
  id: number,
  nome: string,
  rua: string,
  numero: string,
  estado: string,
  cidade: string,
  inscricao: string,
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly urlApi = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  public getClients (): Observable<Clients[]> {
    return this.http.get<Clients[]>(this.urlApi);
  }

  public getClient (clientId: number): Observable<ResponseContentDTO<Clients>> {
    return this.http.get<ResponseContentDTO<Clients>>(`${this.urlApi}/${clientId}`);
  }
}
