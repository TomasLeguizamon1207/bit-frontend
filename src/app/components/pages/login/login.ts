import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../../services/singin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';
  showPassword: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      role: ['']
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value;
      this.signinService.login({ email, password, role }).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role); 
          if (res.role === 'admin') {
            this.router.navigate(['/admin-flights']);
          } else {
            this.router.navigate(['/employee-flights']);
          }
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = '❌ Correo, contraseña o rol inválidos';
        }
      });
    } else {
      this.errorMessage = '❌ Por favor completa todos los campos correctamente';
    }
  }

  goToRegister() {
    this.router.navigate(['/sign-up']);
  }
}
