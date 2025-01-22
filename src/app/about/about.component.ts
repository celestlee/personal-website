import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true
})
export class AboutComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
      console.log('Fade elements found:', fadeElements);
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log('Entry observed:', entry);
            if (entry.isIntersecting) {
              console.log('Adding visible class to:', entry.target); 
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      fadeElements.forEach((el) => observer.observe(el));
    }
  }
}