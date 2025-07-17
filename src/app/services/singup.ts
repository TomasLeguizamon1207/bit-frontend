import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:4000/auth/register';

  constructor(private http: HttpClient) {}

  register(data: { name: string; email: string; password: string; role: string; secret:string }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}