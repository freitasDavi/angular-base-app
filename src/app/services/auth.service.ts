import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export type LoginDTO = {
  login: string,
  password: string
}


type LoginResponseDTO = {
  message: string;
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = "http://localhost:8080/api/auth";

  constructor(
    private http: HttpClient,
    private router: Router) { }

  public login (dto: LoginDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(this.urlApi + "/login", dto);
  }

  public logout () {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  public storeToken (token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken (): string | null {
    return localStorage.getItem('token');
  }

  public clearToken (): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn (): boolean {
    return !!localStorage.getItem('token');
  }
}
