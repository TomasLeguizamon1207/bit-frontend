import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'http://localhost:4000/auth/login';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string; role: string }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
