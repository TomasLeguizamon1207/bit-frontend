import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:4000/flights'; 

  constructor(private http: HttpClient) {}

  getFlights() {
    return this.http.get<any[]>(this.apiUrl);
  }

  createFlight(flight: any) {
    return this.http.post(this.apiUrl, flight);
  }

  updateFlight(id: string, flight: any) {
    return this.http.put(`${this.apiUrl}/${id}`, flight);
  }

  deleteFlight(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
