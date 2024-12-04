import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(
    private router: Router,
) { }
contactNavgation(): void {
  this.router.navigate(['contacts']);
} 
addcontact(): void {
  this.router.navigate(['add-contact']);
} 
  title = 'contacts-management';
}
