import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router
import { Contact, ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-contacts-list',
  standalone: true, // Declare as standalone
  imports: [CommonModule], // Import CommonModule to use *ngFor, *ngIf
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = []; // Define an array of Contact objects

  constructor(private contactsService: ContactsService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the list of contacts from the service
    this.contactsService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data; // Explicitly specify that 'data' is of type 'Contact[]'
    });
  }

  // Navigate to the edit page for the specified contact ID
  editContact(contactId: number): void {
    this.router.navigate(['/edit-contact', contactId]);
  }
}
