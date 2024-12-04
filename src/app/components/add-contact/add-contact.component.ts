import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,  // Declaring as a standalone component
  imports: [FormsModule],  // Import FormsModule here
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
  };

  isSubmitted = false;

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  onAddContact(): void {
    this.isSubmitted = true;

    // Manually validate form fields
    if (this.isFormValid()) {
      // Call the service to add the contact
      this.contactsService.addContact(this.contact).subscribe({
        next: () => {
          alert('Contact added successfully!');
          this.router.navigate(['/contacts']); // Navigate to the contacts list
        },
        error: (err) => {
          console.error('Error adding contact:', err);
        },
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  // Form validation logic
  isFormValid(): boolean {
    // Check for required fields and valid email format
    return (
      !!this.contact.firstName &&
      !!this.contact.lastName &&
      !!this.contact.email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contact.email)
    );
  }
}