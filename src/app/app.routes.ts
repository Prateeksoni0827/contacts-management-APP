import { Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' }, // Default route
    { path: 'contacts', component: ContactsListComponent },   // List all contacts
    { path: 'add-contact', component: AddContactComponent },  // Add new contact
    { path: 'edit-contact/:id', component: EditContactComponent } // Edit contact by ID
];
