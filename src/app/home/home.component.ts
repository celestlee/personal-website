import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AboutComponent } from '../about/about.component'; 
import { WorkComponent } from '../work/work.component';
import { SkillsComponent } from "../skills/skills.component"; 
import { ProjectsComponent } from "../projects/projects.component"; 
import { ConnectComponent } from "../connect/connect.component"; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, AboutComponent, WorkComponent, SkillsComponent, ProjectsComponent, ConnectComponent],
})
export class HomeComponent {
  showScrollToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollToTop = window.scrollY > 100;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('show');
    }
  }
}