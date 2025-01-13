import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AboutComponent } from '../about/about.component'; // Ensure the path is correct
import { WorkComponent } from '../work/work.component';
import { SkillsComponent } from "../skills/skills.component"; // Ensure the path is correct
import { ProjectsComponent } from "../projects/projects.component"; // Ensure the path is correct
import { ConnectComponent } from "../connect/connect.component"; // Ensure the path is correct

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, AboutComponent, WorkComponent, SkillsComponent, ProjectsComponent, ConnectComponent], // Import AboutComponent here
})
export class HomeComponent {
  showScrollToTop = false;

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollToTop = window.scrollY > 100;
  }

  // Scroll to top method
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  }
}