import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    title: 'Get In Touch',
    subtitle: 'Feel free to reach out - I\'d love to hear from you!',
    email: 'your.email@example.com',
    phone: '+1 (123) 456-7890',
    location: 'City, Country',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
      { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: 'twitter' }
    ]
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted!', this.formData);
    // In a real application, you would send this data to your backend
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}

