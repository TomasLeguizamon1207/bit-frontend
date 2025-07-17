import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-flights',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-flights.html',
  styleUrls: ['./admin-flights.css']
})
export class AdminFlights implements OnInit {
  flights: any[] = [];
  newFlight = {
    flightNumber: '',
    origin: '',
    destination: '',
    departureTime: '',
    status: 'scheduled'
  };

  editingFlight: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights(): void {
    this.http.get<any>('http://localhost:4000/flights').subscribe({
      next: (response) => {
        this.flights = response.data || [];
      },
      error: (err) => {
        console.error(' Error al obtener vuelos:', err);
      }
    });
  }

  createFlight(): void {
    const payload = { ...this.newFlight };
    payload.departureTime = new Date(payload.departureTime).toISOString();

    this.http.post<any>('http://localhost:4000/flights', payload).subscribe({
      next: () => {
        console.log('Vuelo creado');
        this.getFlights();
        this.newFlight = { flightNumber: '', origin: '', destination: '', departureTime: '', status: 'scheduled' };
      },
      error: (err) => {
        console.error(' Error al crear vuelo:', err);
      }
    });
  }

  deleteFlight(id: string): void {
    this.http.delete<any>(`http://localhost:4000/flights/${id}`).subscribe({
      next: () => {
        console.log(' Vuelo eliminado');
        this.getFlights();
      },
      error: (err) => {
        console.error(' Error al eliminar vuelo:', err);
      }
    });
  }

  startEdit(flight: any): void {
    this.editingFlight = { ...flight };
    this.editingFlight.departureTime = this.editingFlight.departureTime.slice(0, 16);
  }

  updateFlight(): void {
    if (!this.editingFlight || !this.editingFlight._id) return;

    const payload = { ...this.editingFlight };
    payload.departureTime = new Date(payload.departureTime).toISOString();

    this.http.put<any>(`http://localhost:4000/flights/${payload._id}`, payload).subscribe({
      next: () => {
        console.log(' Vuelo actualizado');
        this.getFlights();
        this.editingFlight = null;
      },
      error: (err) => {
        console.error(' Error al actualizar vuelo:', err);
      }
    });
  }

  cancelEdit(): void {
    this.editingFlight = null;
  }
}
