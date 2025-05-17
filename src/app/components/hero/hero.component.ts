import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Kushal Thapa';
  title = '.NET Developer';
  description = 'A passionate .NET developer from Nepal with 2 years of experience, currently working at Amnil Technology. Specializing in MVC, Web Applications, and database solutions with expertise in SQL and MongoDB.';
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

