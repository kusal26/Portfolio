import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsData = {
    title: 'My Projects',
    subtitle: 'Check out some of my recent work',
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
        technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        imageUrl: 'assets/projects/project-1.jpg',
        demoUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with Angular, featuring smooth animations and a clean design.',
        technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
        imageUrl: 'assets/projects/project-2.jpg',
        demoUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Task Management App',
        description: 'A task management application with drag and drop functionality, user authentication, and real-time updates.',
        technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
        imageUrl: 'assets/projects/project-3.jpg',
        demoUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'A weather dashboard that displays current and forecasted weather data from multiple cities using a weather API.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
        imageUrl: 'assets/projects/project-4.jpg',
        demoUrl: '#',
        codeUrl: '#'
      }
    ]
  };
}

