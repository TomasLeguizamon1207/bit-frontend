import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router = inject(Router);

  goToLogin() {
    console.log('Navegando a login...');
    this.router.navigate(['/sign-in']);
  }

  goToRegister() {
    console.log('Navegando a register...');
    this.router.navigate(['/sign-up']);
  }
}
