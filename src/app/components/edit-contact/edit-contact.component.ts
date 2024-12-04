import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ContactsService, Contact } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  standalone: true, // Declare standalone
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  isSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = +this.route.snapshot.paramMap.get('id')!;
    this.loadContact(contactId);
  }

  loadContact(id: number): void {
    this.contactsService.getContacts().subscribe({
      next: (contacts: Contact[]) => {
        const contact = contacts.find((c) => c.id === id);
        if (contact) {
          this.contact = contact;
        } else {
          alert('Contact not found.');
          this.router.navigate(['/contacts']);
        }
      },
      error: (err) => {
        console.error('Error loading contact:', err);
      },
    });
  }

  onUpdateContact(firstName: any, lastName: any, email: any): void {
    this.isSubmitted = true;

    // Validate the fields manually
    if (!firstName.valid || !lastName.valid || !email.valid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Call the service to update the contact
    this.contactsService.updateContact(this.contact).subscribe({
      next: () => {
        alert('Contact updated successfully!');
        this.router.navigate(['/contacts']); // Navigate to the contacts list
      },
      error: (err) => {
        console.error('Error updating contact:', err);
      },
    });
  }

  // Check if the form is valid
  isFormValid(): boolean {
    return (
      !!this.contact.firstName &&
      !!this.contact.lastName &&
      !!this.contact.email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contact.email) // Basic email validation
    );
  }
}