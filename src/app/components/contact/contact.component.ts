import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    title: 'Get In Touch',
    subtitle: 'Feel free to reach out - I\'d love to hear from you!',
    email: 'tkusal965@gmail.com',
    phone: '+977 9811199095',
    location: 'Kathmandu, Nepal',
    description: 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kushal-thapa-b06710182/', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/kusal26', icon: 'github' },
      { name: 'Twitter', url: 'https://x.com/Kusalth61169052', icon: 'twitter' }
    ]
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  formSubmitted = false;
  @ViewChild('contactForm') contactForm!: NgForm;

  // Simpler form submission function
  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form submitted!', this.formData);
      
      // Show success message
      this.formSubmitted = true;
      
      // Reset form after a delay
      setTimeout(() => {
        this.resetForm();
      }, 500);
    }
  }
  
  // Separate function to reset the form
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    if (this.contactForm) {
      this.contactForm.resetForm();
    }
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000);
  }
  
  // Clear success message when user starts typing again
  clearSuccessMessage() {
    if (this.formSubmitted) {
      this.formSubmitted = false;
    }
  }
}