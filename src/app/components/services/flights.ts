import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = 'http://localhost:4000/flights';

  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updateFlight(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}