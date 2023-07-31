import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type LoginDTO = {
  login: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  public login (dto: LoginDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.urlApi + "/login", dto);
  }
}
