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
        name: 'Backend Development',
        skills: [
          { name: '.NET Core', level: 85 },
          { name: 'C#', level: 85 },
          { name: 'ASP.NET MVC', level: 85 },
          { name: 'Web API', level: 80 },
          { name: 'Entity Framework', level: 80 }
        ]
      },
      {
        name: 'Databases',
        skills: [
          { name: 'SQL Server', level: 85 },
          { name: 'MongoDB', level: 75 },
          { name: 'Database Design', level: 80 }
        ]
      },
      {
        name: 'Frontend Development',
        skills: [
          { name: 'HTML/CSS', level: 80 },
          { name: 'JavaScript', level: 75 },
          { name: 'jQuery', level: 80 },
          { name: 'Angular', level: 60 }
        ]
      },
      {
        name: 'Tools & Others',
        skills: [
          { name: 'Git', level: 80 },
          { name: 'Visual Studio', level: 85 },
          { name: 'Azure DevOps', level: 70 },
          { name: 'RESTful APIs', level: 80 }
        ]
      }
    ]
  };
}

