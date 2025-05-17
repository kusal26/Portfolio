import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutText = {
    title: 'About Me',
    subtitle: 'Professional .NET Developer with a passion for building robust web applications',
    bio: [
      'I am a dedicated .NET Developer based in Nepal, currently working with Amnil Technology. With 2 years of professional experience, I specialize in developing MVC applications and web solutions using the .NET framework.',
      'My expertise includes working with various SQL databases and MongoDB, allowing me to create efficient and scalable database solutions. I also have experience with front-end technologies like jQuery and am currently expanding my skills in Angular development.',
      'At Amnil Technology, I collaborate with cross-functional teams to deliver high-quality software solutions that meet client requirements and industry standards.'
    ],
    experienceYears: 2,
    projectsCompleted: 10,
    clientsServed: 5
  };

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

