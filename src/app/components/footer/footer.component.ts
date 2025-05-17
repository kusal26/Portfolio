import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  id: string;
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  footerData = {
    name: 'Your Name',
    links: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' }
    ],
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
      { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: 'twitter' }
    ]
  };
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

