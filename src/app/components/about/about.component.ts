import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutText = {
    title: 'About Me',
    subtitle: 'Learn more about my background and experience',
    bio: [
      'I am a passionate web developer with a strong foundation in modern frameworks and technologies.',
      'With expertise in front-end and back-end development, I create responsive and user-friendly applications that solve real-world problems.',
      'I am constantly learning and exploring new technologies to stay at the forefront of web development.'
    ],
    experienceYears: 5,
    projectsCompleted: 30,
    clientsServed: 15
  };
}

