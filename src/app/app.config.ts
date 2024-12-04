import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common'; // Ensure this is imported

import { routes } from './app.routes'; // Import your routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provide routes
    importProvidersFrom(HttpClientModule, CommonModule), // Import necessary modules
  ],
};
