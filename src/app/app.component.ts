import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import CommonModule, RouterOutlet, etc. so you can use them in this component
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <nav>
      <!-- Simple nav with routerLink -->
    </nav>

    <!-- router-outlet goes here -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}