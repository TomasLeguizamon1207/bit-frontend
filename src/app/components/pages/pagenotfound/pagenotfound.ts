import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagenotfound.html',
  styleUrls: ['./pagenotfound.css']
})
export class Pagenotfound {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']); 
  }
}
