import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../../services/singup';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      secret: ['', Validators.required],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      this.signupService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.successMessage = '✅ Registro exitoso';
          this.errorMessage = '';
          setTimeout(() => this.router.navigate(['/sign-in']), 2000);
        },
        error: (err: any) => {
          console.error(err);
          this.successMessage = '';
          this.errorMessage = err.error?.message || '❌ Error al registrar';
        },
      });
    } else {
      this.errorMessage = '❌ Por favor llena todos los campos correctamente';
    }
  }

  goToLogin() {
    this.router.navigate(['/sign-in']);
  }
}
