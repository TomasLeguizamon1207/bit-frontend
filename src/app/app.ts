import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

// Páginas
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { DashboardAdmin } from './components/pages/dashboard-admin/dashboard-admin';
import { DashboardEmployee } from './components/pages/dashboard-employee/dashboard-employee';

// Servicios
import { SigninService } from './components/services/singin';
import { SignupService } from './components/services/singup';
import { FlightsService } from './components/services/flights';

// Guard
import { ActivateGuard } from './guards/activate-guard';

@NgModule({
  declarations: [
    Login,
    Register,
    DashboardAdmin,
    DashboardEmployee
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SigninService,
    SignupService,
    FlightsService,
    ActivateGuard
  ],
  bootstrap: [Login] // ⬅️ Arranca directamente en Login
})
export class AppModule {}
