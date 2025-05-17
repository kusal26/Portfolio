import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = {
    title: 'My Skills',
    subtitle: 'Technologies I work with',
    categories: [
      {
        name: 'Frontend Development',
        skills: [
          { name: 'HTML5', level: 90 },
          { name: 'CSS3', level: 85 },
          { name: 'JavaScript', level: 88 },
          { name: 'TypeScript', level: 80 },
          { name: 'Angular', level: 85 },
          { name: 'React', level: 75 }
        ]
      },
      {
        name: 'Backend Development',
        skills: [
          { name: 'Node.js', level: 75 },
          { name: 'Express', level: 70 },
          { name: '.NET Core', level: 65 },
          { name: 'SQL', level: 80 }
        ]
      },
      {
        name: 'Tools & Others',
        skills: [
          { name: 'Git', level: 85 },
          { name: 'Docker', level: 60 },
          { name: 'Figma', level: 65 },
          { name: 'Responsive Design', level: 90 }
        ]
      }
    ]
  };
}

